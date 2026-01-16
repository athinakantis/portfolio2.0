import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from "./theme/ThemeProvider.tsx"
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
