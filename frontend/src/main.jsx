import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * The actual entry point for your React application when using Vite.
 * Mounts the React component tree (App.jsx) into the HTML page (index.html).
 * Typical Contents:
ReactDOM.createRoot(...).
Import of App.jsx and global CSS or providers.
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
