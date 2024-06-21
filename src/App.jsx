import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landpage from './Components/Landingpage/Landpage'
import Login from './pages/forgetpassword/Login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Signup from './pages/forgetpassword/Signup';
import Forgetpassword from './pages/forgetpassword/Forgetpassword';
import Checkemail from './pages/forgetpassword/Checkemail';
import Reset from './pages/forgetpassword/Reset';
import Comfirm from './pages/forgetpassword/Comfirm';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landpage/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgetpassword' element={<Forgetpassword/>}/>
          <Route path='/checkemail' element={<Checkemail/>}/>
          <Route path='/reset' element={<Reset/>}/>
          <Route path='/comfirm' element={<Comfirm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App