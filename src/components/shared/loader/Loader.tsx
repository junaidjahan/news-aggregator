import { loaderState } from '@/stores/loader/loader';
import { Backdrop, CircularProgress } from '@mui/material';
import { useRecoilValue } from 'recoil';

export const Loader = () => {
    const loader = useRecoilValue(loaderState);

    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: theme => theme.zIndex.drawer + 1
            }}
            open={!!loader}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};
