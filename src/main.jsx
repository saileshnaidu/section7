import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Lab1 from './Componentss/Lab1.jsx'
import Lab2 from './Componentss/Lab2.jsx'
import Lab3 from './Componentss/Lab3.jsx'
import Lab4 from './Componentss/Lab4.jsx'
import Lab5 from './Componentss/Lab5.jsx'
import Lab6 from './Componentss/Lab6.jsx'
import Lab7 from './Componentss/Lab7.jsx'
import Lab8 from './Componentss/Lab8.jsx'
import Lab9 from './Componentss/Lab9.jsx'
import Lab10 from './Componentss/Lab10.jsx'
import Lab10a from './Componentss/Lab10a.jsx'
import AdminDboard from './Componentss/AdminDboard.jsx'
import UserDboard from './Componentss/UserDboard.jsx'
import Parent from './Componentss/Parent.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Lab1" element={<Lab1 />} />
    <Route path="/Lab2" element={<Lab2 />} />
    <Route path="/Lab3" element={<Parent />} />
    <Route path="/Lab4" element={<Lab4 />} />
    <Route path="/Lab5" element={<Lab5 />} />
    <Route path="/Lab6" element={<Lab6/>} />
    <Route path="/Lab7" element={<Lab7/>} />
    <Route path="/Lab8" element={<Lab8/>} />
    <Route path="/Lab9" element={<Lab9/>} />
    <Route path="/Lab10" element={<Lab10/>} />
    <Route path="/admindashboard" element={<AdminDboard />} />
    <Route path="/userdashboard" element={<UserDboard />} />
   </Routes>
  </BrowserRouter>
)
