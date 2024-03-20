import { useEffect } from 'react';
import { NewsCard } from '../../shared';
import { useNews } from '@/pages/news/hooks/useNews';
import { NewsParams } from '@/typings';


export const Latest = (props:NewsParams) => {
    const { news, getNewsData } = useNews();

    useEffect(() => {
        (async () => {
            await getNewsData({});
        })();
    }, []);


    useEffect(()=>{console.log("Hello");
    }, [props])

    return (
        <div>
            <div >
                {news?.map(news => {
                    return (
                        <div className="mt-3" key={news.title}>
                            <NewsCard
                                {...news}
                                source={news?.source?.['id' as any]}
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
