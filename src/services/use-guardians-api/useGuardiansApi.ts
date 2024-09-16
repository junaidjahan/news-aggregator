import { useAxios, useLoader } from '@/hooks';
import { preferences } from '@/stores/preferences/preferences';
import { GuardianNewsType, UserTags } from '@/typings';
import { useRecoilValue } from 'recoil';

export const useGuardiansApi = () => {
    const apiUrl = import.meta.env.REACT_APP_GUARDIAN_API_URL;
    const apiKey = import.meta.env.REACT_APP_GUARDIAN_API_KEY;

    const { get } = useAxios(apiUrl);
    const { showLoader, hideLoader } = useLoader()
    const filter:UserTags = useRecoilValue(preferences);

    const getAllNewsGuardians = async ():Promise<Array<GuardianNewsType>> => {
        try {
            showLoader()
            const authorsQuery = `show-references=authors`
            const data = await get<{response: { results: Array<GuardianNewsType>}}>(`/search?api-key=${apiKey}&${filter?.authors ? authorsQuery : ''}`);        
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
