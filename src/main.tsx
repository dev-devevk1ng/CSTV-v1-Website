/*
  Date 18 Dec 2025
*/

import React from 'react';
import ReactDOM  from 'react-dom/client';
//import App from '@/App';
import { RouterProvider } from 'react-router-dom';

// styles
import '@/styles/globals.css';
import "@/themes/index.css";

import Routes from "@/routes/Routes"
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={Routes}/>
    </ThemeProvider>
  </React.StrictMode>,
)
