import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Shell } from './components/Layout'
import { Workshops } from './components/Workshops'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Shell page="workshops">
      <Workshops />
    </Shell>
  </StrictMode>,
)
