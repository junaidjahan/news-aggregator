import { useNewsApi } from '@/services';
import { NewsAIType, SourceModel } from '@/typings';
import { useState } from 'react';

export const useNews = () => {
    const { getAll, getSources } = useNewsApi();

    const [sources, setSources] = useState<Array<SourceModel>>([]);
    const [news, setNews] = useState<Array<NewsAIType>>([]);

    const getNewsData = async (query: any) => {
        try {
            setNews([] as any);
            const data = await getAll(query);
            setNews(prevNews => {
                if (prevNews) {
                    return [...prevNews, ...(data as any)];
                }
                return data as any;
            });
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
