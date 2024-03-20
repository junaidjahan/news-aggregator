import { Trending } from '@/components/feed';
import { Headlines } from '@/components/feed/headlines';
import { Latest } from '@/components/feed/latest';

export const Feed = () => {
    return (
        <div>
            <div className="md:grid grid-cols-12 bg-white rounded-xl p-3 gap-x-3">
                <div className="col-span-8">
                    <Headlines />
                </div>
                <div className="col-span-4">
                    <Trending />
                </div>
            </div>
            <div className="mt-3 bg-white rounded-3xl p-2 px-5">
                <p className=" p-3 relative text-2xl text-gray-800 font-semibold">
                    <span className="after:block after:absolute after:h-1 after:-inset-1  after:bg-primary-500 after:top-11 after:left-3 after:w-10">
                        Latest
                    </span>
                </p>
                <Latest />
            </div>
        </div>
    );
};
