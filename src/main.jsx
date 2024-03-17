import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-sm mx-auto md:max-w-screen-md lg:max-w-[1920px]'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>

    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
