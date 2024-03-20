import { BaseTag } from '@/components/ui';

type HeadlineNewsCardProps = {
    author: string;
    description: string;
    publishedAt: string;
    source: string;
    title: string;
    url?: string;
    urlToImage: string;
    category?: string;
    subCategory?: string;
};

export const HeadlineNewsCard = ({
    title,
    description,
    publishedAt,
    urlToImage,
    source,
    category,
    author,
    subCategory
}: HeadlineNewsCardProps) => {
    return (
        <>
            <div
                className="border p-5 rounded-xl bg-white"
                data-testid="news-card"
            >
                <div className="md:grid grid-cols-12 gap-x-4">
                    <img
                        className=" order-1 md:h-102 h-40 w-full object-cover rounded-xl col-span-7"
                        src={urlToImage}
                    />
                    <div className="col-span-5">
                        <h2 className="font-semibold text-2xl mt-3 md:mt-0 md:text-5xl">
                            {title}
                        </h2>
                        <div>
                            <p className="md:text-md text-sm text-gray-500 mt-2 md:mt-5">
                                {description?.slice(0, 200)}
                            </p>
                        </div>
                        <div className="md:flex justify-between mt-5 items-top gap-x-2">
                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                    {author}
                                </p>
                                <div>
                                    <p className="text-xs text-gray-800">
                                        <span className="font-semibold">
                                            Source:
                                        </span>{' '}
                                        {source}
                                    </p>
                                </div>
                            </div>
                            <div className='[&_h1]:text-[0.6rem] mt-2 md:mt-0'>
                                <BaseTag
                                    size="xs"
                                    title={publishedAt?.slice(0, 10) || ''}
                                    color="gray"
                                />
                            </div>
                        </div>

                        <div className="mt-3 flex gap-x-2">
                            <BaseTag
                                size="sm"
                                title={category || ''}
                                color="primary"
                            />
                            <BaseTag
                                size="sm"
                                title={subCategory || ''}
                                color="secondary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
