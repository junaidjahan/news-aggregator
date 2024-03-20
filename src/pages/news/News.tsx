import { NewsCard } from '@/components/shared';
import { categories } from '@/data';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { Filter } from './components/Filter';
import { useNews } from './hooks/useNews';

export const News = () => {
    const { sources, news, getNewsData, getAllSources } = useNews();

    useEffect(() => {
        (async () => {
            await getNewsData({});
            await getAllSources();
        })();
      
    }, []);

    useEffect(() => {}, [sources]);

    const handleSearch = async (data: any) => {
        await getNewsData(data);
    };

    return (
        <>
            <div>
                <Container maxWidth="lg">
                    <div className="relative max-sm:min-h-98 md:max-h-80 overflow-hidden rounded-3xl ">
                        <img
                            className="w-full max-sm:h-98 !object-fill md:object-cover"
                            src="https://images.unsplash.com/photo-1470082719408-b2843ab5c9ab?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <div className="absolute h-full top-0 bg-gradient-to-t from-gray-800 to-transparent w-full "></div>
                        <div className="absolute h-full top-1/4 right-1/2 left-[10%] w-3/4">
                            <Filter
                                sources={sources}
                                categories={categories}
                                onHandleSearch={handleSearch}
                            />
                        </div>
                    </div>
                    <div className="mt-3 bg-white rounded-3xl p-5 px-7">
                        {news.length ? news?.map(news => {
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
                        }) : 'No data!'}
                    </div>
                </Container>
            </div>
        </>
    );
};
