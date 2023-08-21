import Home from './pages/Home'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import React, { } from 'react';
import Admin from './pages/Admin';
import About from './pages/About';
import Problem from './pages/Problem'

const App = () => {
  
  return (
    <Router>
      <Routes>

       
        <Route path="/admin" element={<Admin/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/problem" element={<Problem/>}/>
      </Routes>
    </Router>
  )
}

export default App