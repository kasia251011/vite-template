import { createBrowserRouter } from 'react-router-dom';

import PATH from './urls';

import App from '@/pages/App';

const router = createBrowserRouter([
  {
    path: PATH.APP,
    element: <App />
  }
]);

export default router;
