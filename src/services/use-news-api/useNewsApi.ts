import { useAxios, useHelper } from '@/hooks';
import { NewsResponseModel, SourceModel } from './typings/source.types';

export const useNewsApi = () => {
    const { serializeQuery } = useHelper();

    const apiUrl = import.meta.env.REACT_NEWS_API_URL;
    const apiKey = import.meta.env.REACT_NEWS_API_KEY;

    const { get } = useAxios(apiUrl);

    const getAll = async (query: any) => {
        const { category, sources, q, date } = query;
        let serializedQuery = '';
        let data = null;

        if (sources?.length) {
            serializedQuery = serializeQuery({ sources, q, apiKey }) ?? '';
            const unfilteredData: NewsResponseModel =
                await get<NewsResponseModel>(
                    `/top-headlines?${serializedQuery}`
                );
            data = unfilteredData?.articles.filter(article =>
                date
                    ? article?.publishedAt?.slice(0, 10) == date?.slice(0, 10)
                    : article
            );
            console.log('Seria', serializedQuery, sources.length);
            return data;
        }

        serializedQuery =
            serializeQuery({ country: 'us', category, q, apiKey }) ?? '';
        const unfilteredData: NewsResponseModel = await get<NewsResponseModel>(
            `/top-headlines?${serializedQuery}`
        );
        
        data = unfilteredData?.articles?.filter(article => {
            if (sources?.length && date) {
                return (
                    sources?.includes(article?.source?.id) &&
                    article?.publishedAt.slice(0, 10) == date?.slice(0, 10)
                );
            } else if (sources?.length) {
                return sources?.includes(article?.source?.id);
            } else if (date) {
                return article?.publishedAt.slice(0, 10) == date?.slice(0, 10);
            } else {
                return true;
            }
        });

        return data;
    };

    const getSources = async () => {
        return await get<{ sources: Array<SourceModel> }>(
            `/top-headlines/sources?apiKey=${apiKey}`
        );
    };

    return {
        getAll,
        getSources
    };
};
