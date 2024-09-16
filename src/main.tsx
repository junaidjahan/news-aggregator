import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './assets/styles/index.css';
import { router } from './router/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
