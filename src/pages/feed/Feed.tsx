import { Trending } from '@/components/feed';
import { Headlines } from '@/components/feed/headlines';
import { Latest } from '@/components/feed/latest';
import { BaseTag } from '@/components/ui';
import { preferences } from '@/stores/preferences/preferences';
import { UserTags } from '@/typings';
import { useRecoilValue } from 'recoil';

export const Feed = () => {
    const filter:UserTags = useRecoilValue(preferences);

    return (
        <div>
            <div className="md:grid grid-cols-12 bg-white rounded-xl p-3 gap-x-3">
                <div className="col-span-9">
                    <Headlines />
                </div>
                <div className="col-span-3 md:max-h-[942px] overflow-auto">
                    <Trending />
                </div>
            </div>
            <div className="mt-3 bg-white rounded-3xl p-2 px-5">
                <p className=" p-3 relative text-2xl text-gray-800 font-semibold">
                    <span className="after:block after:absolute after:h-1 after:-inset-1  after:bg-primary-500 after:top-11 after:left-3 after:w-10">
                        Latest
                    </span>
                </p>
                {
                filter?.sources ?
                <div className='mt-1 mb-2 flex gap-x-2'>
                    {
                        filter?.sources?.map((src,index)=>{
                            if(index >= 8 ) return  
                            return <BaseTag title={src} color='gray' key={src+index} />
                        })

                    }
                </div>
                : ''
            }
                <Latest />
            </div>
        </div>
    );
};
