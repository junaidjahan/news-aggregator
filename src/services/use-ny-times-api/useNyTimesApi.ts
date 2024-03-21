import { useAxios, useLoader } from '@/hooks';
import { NYTimesType } from '@/typings';

export const useNyTimesApi = () => {
    const apiUrl = import.meta.env.REACT_APP_NEW_YORK_TIMES_API_URL;
    const apiKey = import.meta.env.REACT_APP_NEW_YORK_TIMES_API_KEY;

    const { get } = useAxios(apiUrl);
    const { showLoader, hideLoader } = useLoader();

    const getAll = async (): Promise<Array<NYTimesType>> => {
        try {
            showLoader();
            const data = await get<{
                response: { docs: Array<NYTimesType> };
            }>(`?api-key=${apiKey}&sort=newest&glocations:("GERMANY")`);

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
