
import { Routes, Route} from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import AskLeave from './components/AskLeave';
import Profile from './components/Profile';

import AllUsers from './components/AdminPortal/AllUsers';
import './App.css'
import Pending from './components/AdminPortal/Pending';
import Approved from './components/AdminPortal/Approved';
import Rejected from './components/AdminPortal/Rejected';




function App() {
  return <div id="wrapper">
  

  
    <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/signup' element={<Signup/>}/>  
      <Route path='/apply-leave' element={<AskLeave/>}/> 
      <Route path='/profile' element={<Profile/>}/> 
      <Route path='/edit-profile' element={<Signup/>}/> 
      <Route path='*' element={<Login/>}/> 
      

      

      <Route path='/approved' element={<Approved/>}/>
      <Route path='/rejected' element={<Rejected/>}/>
  
      <Route path='/pending' element={<Pending/>}/>
    <Route path='/all-users' element={<AllUsers/>}/>
    </Routes>
    

  </div>
}

export default App;
