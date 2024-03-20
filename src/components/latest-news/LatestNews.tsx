import { useNyTimesApi } from '@/services/use-ny-times-api/useNyTimesApi';
import { useEffect, useState } from 'react';

export const LatestNews = () => {
    const { getAll } = useNyTimesApi();

    const [news, setNews] = useState<Awaited<ReturnType<typeof getAll>>>([]);

    useEffect(() => {
        (async () => {
            setNews(await getAll());
        })();
    }, []);

    return (
        <div>
            What's currently happening in Germany
            {news.map(news => (
                <div>{news.headline.main}</div>
            ))}
        </div>
    );
};
