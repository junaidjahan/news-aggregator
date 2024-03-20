import { useGuardiansApi } from '@/services';
import { useEffect, useState } from 'react';
import { NewsCard } from '../../shared';
import { GuardianNewsType } from '@/typings';
import { useHelper } from '@/hooks';

export const Trending = () => {
    const { getAllNewsGuardians } = useGuardiansApi();
    const { textEllipsis } = useHelper();

    const [guardianNews, setGuardianNews] = useState<
        Awaited<Array<GuardianNewsType>>
    >([]);

    useEffect(() => {
        (async () => {
            setGuardianNews(await getAllNewsGuardians());
        })();
    }, []);

    return (
        <div>
            <p className=" p-3 text-2xl relative text-gray-800 font-semibold">
                <span className='after:block after:absolute after:h-1 after:-inset-1  after:bg-primary-500 after:top-11 after:left-3 after:w-10'>
                Trending
                </span>
            </p>
            <div>
                {guardianNews?.map(
                    (article: GuardianNewsType, index: number) => {
                        if (index == 0 || index > 7) return;
                        return (
                            <div className="col-span-3 mb-3 [&_h2]:!mt-0">
                                <NewsCard
                                    title={
                                        (article?.webTitle?.length > 65
                                            ? textEllipsis(
                                                  article?.webTitle,
                                                  65
                                              )
                                            : article.webTitle) ?? ''
                                    }
                                    publishedAt={article?.webPublicationDate}
                                    showImage={false}
                                    size="xs"
                                    source={article?.sectionName}
                                />
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};
