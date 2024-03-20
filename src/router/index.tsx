import { App } from '@/App';
import { Feed } from '@/pages/feed/Feed';
import { News } from '@/pages/news/News';
import { Settings } from '@/pages/settings/Settings';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Feed />
            },
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'settings',
                element: <Settings />
            }
        ]
    }
]);
