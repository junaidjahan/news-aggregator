import { useAxios, useLoader } from '@/hooks';
import { GuardianNewsType } from '@/typings';

export const useGuardiansApi = () => {
    const apiUrl = import.meta.env.REACT_APP_GUARDIAN_API_URL;
    const apiKey = import.meta.env.REACT_APP_GUARDIAN_API_KEY;

    const { get } = useAxios(apiUrl);
    const { showLoader, hideLoader } = useLoader()

    const getAllNewsGuardians = async ():Promise<Array<GuardianNewsType>> => {
        try {
            showLoader()
            const data = await get<{response: { results: Array<GuardianNewsType>}}>(`/search?api-key=${apiKey}`);        
            return data.response.results;
            
        } catch (error) {
            console.error("Error", error)
            return []
        }finally{
            hideLoader()
        }
    };

    return { getAllNewsGuardians };
};
