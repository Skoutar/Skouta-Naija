import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/forgetpassword/Login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Signup from './pages/forgetpassword/Signup';
import Forgetpassword from './pages/forgetpassword/Forgetpassword';
import Checkemail from './pages/forgetpassword/Checkemail';
import Reset from './pages/forgetpassword/Reset';
import Comfirm from './pages/forgetpassword/Comfirm';
import Land from './Components/Landingpage/Land';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Booking from './pages/Booking';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Land' element={<Land/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgetpassword' element={<Forgetpassword/>}/>
          <Route path='/checkemail' element={<Checkemail/>}/>
          <Route path='/reset' element={<Reset/>}/>
          <Route path='/comfirm' element={<Comfirm/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='' element={<Booking/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App