import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { wedding } from './data/weddingData'
import './styles.css'

;[wedding.hero.image, wedding.gallery[0].src].forEach(s => { new Image().src = s })

createRoot(document.getElementById('root')).render(<App />)