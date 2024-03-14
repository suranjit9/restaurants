import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='max-w-screen-sm mx-auto md:max-w-screen-md lg:max-w-[1920px]'>
      <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
