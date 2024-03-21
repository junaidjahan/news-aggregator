import { useAxios, useHelper, useLoader } from '@/hooks';
import { NewsResponseModel, SourceModel } from './typings/source.types';
import { NewsAIType, NewsParams, UserTags } from '@/typings';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authors } from '@/stores/news-resources/news-resources';
import { preferences } from '@/stores/preferences/preferences';
import { useLocation } from 'react-router-dom';

export const useNewsApi = () => {
    const { serializeQuery } = useHelper();

    const apiUrl = import.meta.env.REACT_NEWS_API_URL;
    const apiKey = import.meta.env.REACT_NEWS_API_KEY;

    const location = useLocation()

    const { get } = useAxios(apiUrl);
    const { showLoader, hideLoader } = useLoader();
    const setAuthors = useSetRecoilState(authors);
    const filter:UserTags = useRecoilValue(preferences);

    const getAll = async (query: NewsParams) => {
        const { category, sources, q, date } = query;
        let serializedQuery = '';
        let data = null;

        showLoader();
        try {
            if (sources?.length || (filter.sources && location.pathname === '/')) {
                const queryWithSources = sources?.length || filter?.sources
                serializedQuery = serializeQuery({ sources:queryWithSources, q, apiKey }) ?? '';
                const unfilteredData: NewsResponseModel =
                    await get<NewsResponseModel>(
                        `/top-headlines?${serializedQuery}`
                    );
                data = unfilteredData?.articles.filter(article =>
                    date
                        ? article?.publishedAt?.slice(0, 10) ==
                          date?.slice(0, 10)
                        : article
                );

                setAuthorsState(data);
                return data;
            }

            serializedQuery =
                serializeQuery({ country: 'us', category, q, apiKey }) ?? '';
            const unfilteredData: NewsResponseModel =
                await get<NewsResponseModel>(
                    `/top-headlines?${serializedQuery}`
                );

            data = unfilteredData?.articles?.filter(article => {
                if (sources?.length && date) {
                    return (
                        sources?.includes(article?.source?.id ?? '') &&
                        article?.publishedAt.slice(0, 10) == date?.slice(0, 10)
                    );
                } else if (sources?.length) {
                    return sources?.includes(article?.source?.id ?? '');
                } else if (date) {
                    return (
                        article?.publishedAt.slice(0, 10) == date?.slice(0, 10)
                    );
                } else {
                    return true;
                }
            });
            setAuthorsState(data);
            return data;
        } catch (error) {
            console.log('Error', error);
        } finally {
            hideLoader();
        }
    };

    const getSources = async () => {
        return await get<{ sources: Array<SourceModel> }>(
            `/top-headlines/sources?apiKey=${apiKey}`
        );
    };

    const setAuthorsState = (allNews: Array<NewsAIType>) => {
        const getNewsWithAuthors = allNews?.filter(news => {
            return news.author;
        });

        const getAuthors = getNewsWithAuthors?.map(news => {
            return news.author!;
        });
        setAuthors(() => [...getAuthors]);
    };

    return {
        getAll,
        getSources
    };
};
