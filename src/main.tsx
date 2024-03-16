import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
