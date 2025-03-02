import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
=======
// import './index.css'
>>>>>>> 919fbc3 (Initial commit)
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <BrowserRouter>
            <Routes>
                {/* <Route path='/portfolio/home' element={} /> */}
                {/* <Route path='/home' /> */}

            </Routes>
        </BrowserRouter>
    </StrictMode>
 
)
