import React from 'react';
import ReactDOM from 'react-dom/client';

import { MainPage } from './pages/MainPage/index.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage></MainPage>
  </React.StrictMode>
);
