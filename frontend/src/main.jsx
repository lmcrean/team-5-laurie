import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import './index.css'
import App from './App.jsx'

// Configure axios base URL
axios.defaults.baseURL = process.env.NODE_ENV === 'production'
  ? 'https://team5-api-eu-5d24fa110c36.herokuapp.com'
  : 'http://localhost:8000';

const root = document.getElementById('root')
if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)
