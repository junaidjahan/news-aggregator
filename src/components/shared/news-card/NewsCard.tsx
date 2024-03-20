import { BaseTag } from '@/components/ui';
import { useHelper } from '@/hooks';
import { NewsModel } from '@/typings';

export const NewsCard = ({
    title,
    source,
    description,
    publishedAt,
    urlToImage,
    url,
    size = 'xs',
    showImage = true,
    tagSize = 'xs'
}: NewsModel) => {
    return (
        <>
            <div className="border p-3 rounded-xl" data-testid="news-card">
                <div
                    className={`${
                        size == 'md' ? 'md:grid' : ''
                    } grid-cols-12 gap-x-4`}
                >
                    {showImage ? (
                        <img
                            className="md:min-h-40 max-h-40 h-full w-full object-cover rounded-xl col-span-3"
                            src={urlToImage}
                        />
                    ) : (
                        ''
                    )}
                    <div className="col-span-9">
                        <h2
                            className={`font-semibold ${
                                size == 'md' ? 'text-2xl' : 'text-xl mt-2'
                            }`}
                        >
                            {title}
                        </h2>
                        <div className="flex justify-between gap-x-2 mt-1">
                            <div>
                                {source ? (
                                    <BaseTag
                                        title={source || ''}
                                        color="secondary"
                                        size={tagSize}
                                    />
                                ): '' }
                            </div>
                            <div>
                                {publishedAt ? (
                                    <BaseTag
                                        title={publishedAt?.slice(0, 10) || ''}
                                        color="gray"
                                        size={tagSize}
                                    />
                                ) : ''}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mt-2">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
