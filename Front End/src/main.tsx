import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
 const googleClientId = import.meta.env.VITE_CLIENT_ID
 
 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<GoogleOAuthProvider clientId={googleClientId}>

    <App />
</GoogleOAuthProvider>
  </StrictMode>,
)