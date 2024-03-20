import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavigationDrawer } from './components/shared';
import { drawerWidth } from './global';
import { RecoilRoot } from 'recoil';

export const App = () => {
    return (
        <RecoilRoot>
            <Box className="flex">
                <NavigationDrawer />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${drawerWidth}px)` }
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </RecoilRoot>
    );
};
