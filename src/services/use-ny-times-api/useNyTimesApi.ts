import { useAxios, useLoader } from '@/hooks';
import { preferences } from '@/stores/preferences/preferences';
import { NYTimesType, UserTags } from '@/typings';
import { useRecoilValue } from 'recoil';

export const useNyTimesApi = () => {
    const apiUrl = import.meta.env.REACT_APP_NEW_YORK_TIMES_API_URL;
    const apiKey = import.meta.env.REACT_APP_NEW_YORK_TIMES_API_KEY;

    const { get } = useAxios(apiUrl);
    const { showLoader, hideLoader } = useLoader();
    const filter:UserTags = useRecoilValue(preferences);

    const getAll = async (): Promise<Array<NYTimesType>> => {
        const categories = filter.categories
        const sectionsQuery = `fq=news_desk:(${categories?.map(cat=>`"${cat}"`)})`
        
        try {
            showLoader();
            const data = await get<{
                response: { docs: Array<NYTimesType> };
            }>(`?api-key=${apiKey}&${categories?.length ? sectionsQuery : ''}`);

            return data.response.docs;
        } catch (error) {
            console.error('Error', error);
            return []
        } finally {
            hideLoader();
        }
    };

    return { getAll };
};
