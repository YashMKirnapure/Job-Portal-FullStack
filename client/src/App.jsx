import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx';
import ApplyJob from './pages/ApplyJob.jsx';
import Applications from './pages/Applications.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<ApplyJob/>}/>
        <Route path='/applications' element={<Applications/>}/>
      </Routes>
    </div>
  )
}

export default App
