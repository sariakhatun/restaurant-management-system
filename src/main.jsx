import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './router/router.jsx'
import AuthProvider from './Components/AuthProvider.jsx'
import ScrollToTop from './pages/ScrollToTop.jsx'
import { ThemeProvider } from './Components/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider>
     <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
     
  </AuthProvider>
   </ThemeProvider>
 
  </StrictMode>,
)
