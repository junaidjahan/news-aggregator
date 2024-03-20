import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { IconNews, IconSearch, IconSettings } from '@tabler/icons-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export const NavigationDrawer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const location = useLocation();
    const navigate = useNavigate();

    const list = [
        {
            title: 'Personalized Feed',
            icon: <IconNews />,
            path: '/'
        },
        {
            title: 'Search News',
            icon: <IconSearch />,
            path: '/news'
        },
        {
            title: 'Settings',
            icon: <IconSettings />,
            path: '/settings'
        }
    ];

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {list.map(item => (
                    <ListItem
                        key={item.title}
                        disablePadding
                        className={`${
                            item.path === location.pathname
                                ? 'border-r-4 bg-teal-50 border-teal-500'
                                : ''
                        }`}
                        onClick={() =>
                            item.path !== location.pathname &&
                            navigate(item.path)
                        }
                    >
                        <ListItemButton>
                            <ListItemIcon
                                className={`${
                                    item.path === location.pathname
                                        ? '!text-teal-600'
                                        : '!text-gray-900'
                                }`}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                className={`${
                                    item.path === location.pathname
                                        ? 'text-teal-600'
                                        : 'text-gray-900'
                                } [&_span]:!text-sm [&_span]:!font-medium`}
                                primary={item.title}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box className="flex border-none">
            <div className="text-end w-full mt-2">
                <AppBar className="text-end !shadow-none !bg-transparent pt-3">
                    <div>
                        <IconButton
                            className="!bg-white shadow-xl w-fit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </AppBar>
            </div>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            border: 'none'
                        }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};
