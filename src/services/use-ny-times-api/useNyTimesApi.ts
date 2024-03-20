import { useAxios } from '@/hooks';

export const useNyTimesApi = () => {
    const apiUrl = import.meta.env.REACT_APP_NEW_YORK_TIMES_API_URL;
    const apiKey = import.meta.env.REACT_APP_NEW_YORK_TIMES_API_KEY;

    const { get } = useAxios(apiUrl);

    const getAll = async () => {
        const data = await get<{
            response: { docs: Array<{ headline: { main: string } }> };
        }>(`?api-key=${apiKey}&sort=newest&glocations:("GERMANY")`);

        return data.response.docs;
    };

    return { getAll };
};