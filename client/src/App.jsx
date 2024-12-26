import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx';
import ApplyJob from './pages/ApplyJob.jsx';
import Applications from './pages/Applications.jsx';
import RecruiterLogin from './components/RecruiterLogin.jsx';
import { AppContext } from './context/AppContext.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AddJob from './pages/AddJob.jsx';
import ManageJobs from './pages/ManageJobs.jsx';
import ViewApplications from './pages/ViewApplications.jsx';
import 'quill/dist/quill.snow.css';

const App = () => {

  const {showRecruiterLogin} = useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<ApplyJob/>}/>
        <Route path='/applications' element={<Applications/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='add-job' element={<AddJob/>}/>
        <Route path='manage-job' element={<ManageJobs/>}/>
        <Route path='view-applications' element={<ViewApplications/>}/>
      </Routes>
    </div>
  )
}

export default App
