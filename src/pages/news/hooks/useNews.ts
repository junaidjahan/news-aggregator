import { useNewsApi } from '@/services';
import { NewsAIType, NewsParams, SourceModel } from '@/typings';
import { useState } from 'react';

export const useNews = () => {
    const { getAll, getSources } = useNewsApi();

    const [sources, setSources] = useState<Array<SourceModel>>([]);
    const [news, setNews] = useState<Array<NewsAIType>>([]);

    const getNewsData = async (query: NewsParams) => {
        try {
            setNews([]);
            const data = await getAll(query);
            if (data?.length) {
                setNews(prevNews => {
                    if (prevNews) {
                        return [...prevNews, ...data];
                    }
                    return data;
                });
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    const getAllSources = async () => {
        try {
            const data = await getSources();
            setSources(prevSources => {
                if (prevSources) {
                    return [...prevSources, ...data.sources];
                }
                return data.sources;
            });
        } catch (error) {
            console.error('Error', error);
        }
    };

    return {
        news,
        sources,
        getNewsData,
        getAllSources
    };
};
