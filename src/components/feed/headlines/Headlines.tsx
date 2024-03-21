import { useNyTimesApi } from '@/services/use-ny-times-api/useNyTimesApi';
import { useEffect, useState } from 'react';
import { HeadlineNewsCard, NewsCard } from '../../shared';
import { NYTimesType } from '@/typings';
import { useHelper } from '@/hooks';

export const Headlines = () => {
    const { getAll } = useNyTimesApi();
    const { textEllipsis } = useHelper();

    const [news, setNews] = useState<Awaited<Array<NYTimesType>>>([]);
  

    useEffect(() => {
        (async () => {
            setNews(await getAll());

        })();
    }, []);

    return (
        <div>
            <p className=" p-3 relative text-2xl text-gray-800 font-semibold">
                <span className="after:block after:absolute after:h-1 after:-inset-1  after:bg-primary-500 after:top-11 after:left-3 after:w-10">
                    Headlines
                </span>
            </p>
            <div>
                <div>
                    <HeadlineNewsCard
                        title={news[0]?.headline?.main}
                        description={news[0]?.lead_paragraph}
                        author={news[0]?.byline.original}
                        publishedAt={news[0]?.pub_date}
                        category={news[0]?.section_name}
                        source={news[0]?.source}
                        subCategory={news[0]?.news_desk}
                        urlToImage={`https://www.nytimes.com/${news[0]?.multimedia[0]?.url}`}
                        url={news[0]?.web_url}
                    />
                </div>
            </div>
            <div className="md:grid grid-cols-12 gap-x-3 mt-3">
                {news.map((article, index) => {
                    if (index == 0 || index > 3) return;
                    return (
                        <div className="col-span-4 [&_h2]:max-w-72 [&_h2]:text-ellipsis [&_h2]:whitespace-nowrap [&_h2]:overflow-hidden min-h-80 [&_h2]:mb-2">
                            <NewsCard
                                title={
                                    (article?.headline?.main?.length > 30
                                        ? textEllipsis(
                                              article?.headline?.main,
                                              30
                                          )
                                        : article.headline.main) ?? ''
                                }
                                description={textEllipsis(
                                    article?.lead_paragraph,
                                    80
                                )}
                                author={article?.byline?.original}
                                publishedAt={article?.pub_date}
                                source={article?.source}
                                urlToImage={`https://www.nytimes.com/${article?.multimedia[0]?.url}`}
                                size="xs"
                                url={article?.web_url}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
