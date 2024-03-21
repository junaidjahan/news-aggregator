import { useEffect } from 'react';
import { NewsCard } from '../../shared';
import { useNews } from '@/pages/news/hooks/useNews';
import { NewsParams } from '@/typings';


export const Latest = () => {
    const { news, getNewsData } = useNews();

    useEffect(() => {
        (async () => {
            await getNewsData({} as NewsParams);
        })();
    }, []);

    return (
        <div>
            <div >
                {news?.map((news,index) => {
                    return (
                        <div className="mt-3" key={news.title+index}>
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
