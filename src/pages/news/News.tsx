import { NewsCard } from '@/components/shared';
import { categories } from '@/data';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { Filter } from './components/Filter';
import { useNews } from './hooks/useNews';

export const News = () => {
    const { sources, news, getNewsData, getAllSources } = useNews();

    useEffect(() => {
        getNewsData({});
        getAllSources();
    }, []);

    useEffect(() => {}, [sources]);

    const handleSearch = (data: any) => {
        getNewsData(data);
    };

    return (
        <>
            <div>
                <Container maxWidth="lg">
                    <div className="relative max-h-80 overflow-hidden rounded-3xl ">
                        <img
                            className="w-full object-cover"
                            src="https://images.unsplash.com/photo-1470082719408-b2843ab5c9ab?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <div className="absolute h-full top-0 bg-gradient-to-t from-gray-800 to-transparent w-full "></div>
                        <div className="absolute h-full top-1/3 right-1/2 left-[10%] w-3/4">
                            <Filter
                                sources={sources}
                                categories={categories}
                                onHandleSearch={handleSearch}
                            />
                        </div>
                    </div>
                    <div className="mt-3 bg-white rounded-3xl p-5 px-9">
                        {news?.map(news => {
                            return (
                                <div className="mt-3" key={news.title}>
                                    <NewsCard news={news} key={news.title} />
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </div>
        </>
    );
};
