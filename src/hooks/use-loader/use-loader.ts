import { loaderState } from '@/stores/loader/loader';
import { useSetRecoilState } from 'recoil';

export const useLoader = () => {
    const setLoader = useSetRecoilState(loaderState);

    const showLoader = () => {
        setLoader(loader => loader + 1);
    };

    const hideLoader = () => {
        setLoader(loader => (loader > 0 ? loader - 1 : loader));
    };

    return {
        showLoader,
        hideLoader
    };
};
