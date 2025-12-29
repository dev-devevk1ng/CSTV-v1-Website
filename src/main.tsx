/*
  Date 18 Dec 2025
*/

import React from 'react';
import ReactDOM  from 'react-dom/client';
//import App from '@/App';
import { ThemeProvider } from "@/contexts/theme/ThemeProvider";
import { SidebarProvider } from "@/contexts/sidebar/SidebarProvider"
import { RouterProvider } from 'react-router-dom';
import Routes from "@/routes/Routes"

// styles
import '@/styles/globals.css';
import "@/themes/index.css";




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <RouterProvider router={Routes}/>
      </SidebarProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
