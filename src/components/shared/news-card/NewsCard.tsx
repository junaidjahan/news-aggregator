import { BaseTag } from '@/components/ui';
import { useHelper } from '@/hooks';
import { NewsModel } from '@/typings';
import { IconExternalLink } from '@tabler/icons-react';

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
    const { openUrl } = useHelper();

    return (
        <>
            <div
                className="border p-3 h-full rounded-xl"
                data-testid="news-card"
            >
                <div
                    className={`${
                        size == 'md' ? 'md:grid' : ''
                    } grid-cols-12 gap-x-4`}
                >
                    {showImage ? (
                        <div className="relative  col-span-3  max-h-40 overflow-hidden rounded-xl">
                            <img
                                className="md:min-h-40 h-full object-cover w-full hover:scale-110 hover:transition hover:ease-in-out hover:duration-300"
                                src={urlToImage}
                            />
                            <div className="absolute bottom-3 right-4 rounded-full shadow-lg cursor-pointer">
                                <IconExternalLink
                                    color="white"
                                    size={30}
                                    onClick={() => {
                                        openUrl(url!);
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className="col-span-9">
                        <h2
                            className={`font-semibold ${
                                size == 'md'
                                    ? 'text-lg mt-2 md:mt-0 md:text-2xl'
                                    : 'md:text-xl mt-2'
                            }`}
                        >
                            {title}
                        </h2>
                        <div
                            className={`${
                                !showImage && 'flex'
                            } justify-between items-center gap-x-2 mt-1`}
                        >
                            <div className="flex justify-between gap-x-2 ">
                                <div>
                                    {source ? (
                                        <BaseTag
                                            title={source || ''}
                                            color="secondary"
                                            size={tagSize}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </div>
                                <div>
                                    {publishedAt ? (
                                        <BaseTag
                                            title={
                                                publishedAt?.slice(0, 10) || ''
                                            }
                                            color="gray"
                                            size={tagSize}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                {!showImage && (
                                    <IconExternalLink
                                        color="gray"
                                        size={24}
                                        onClick={() => {
                                            openUrl(url!);
                                        }}
                                    />
                                )}
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
