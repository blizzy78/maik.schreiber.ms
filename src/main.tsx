import { StrictMode } from 'react'
import { hydrate } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

const container = document.getElementById('app')
if (!container) {
  throw new Error('container not found')
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrate(app, container)
} else {
  createRoot(container).render(app)
}
