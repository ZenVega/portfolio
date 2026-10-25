import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Shell } from './components/Layout'
import type { Page } from './pages'

export function renderPage(page: Page, content: ReactNode) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Shell page={page}>{content}</Shell>
    </StrictMode>,
  )
}
