import React from 'react'
import { createRoot } from 'react-dom/client'

import App from 'pages/App'

const root = document.getElementById('root') as HTMLDivElement

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
