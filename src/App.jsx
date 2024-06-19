import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landpage from './Components/Landingpage/Landpage'
import Login from './pages/login/Login';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landpage/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App