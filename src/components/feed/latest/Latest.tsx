import { useEffect } from 'react';
import { NewsCard } from '../../shared';
import { useNews } from '@/pages/news/hooks/useNews';


export const Latest = () => {
    const { news, getNewsData } = useNews();

    useEffect(() => {
        (async () => {
            await getNewsData({});
        })();
    }, []);

    return (
        <div>
            <div >
                {news?.map(news => {
                    return (
                        <div className="mt-3" key={news.title}>
                            <NewsCard
                                {...news}
                                source={news?.source?.id}
                                size="md"
                                key={news.title}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
