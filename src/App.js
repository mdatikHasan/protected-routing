import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Shops from './components/Shops/Shops';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';
import About from './components/About/About';
import Doctors from './components/Doctors/Doctors';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
// import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/services' element={<Services></Services>}></Route>
            <Route path='/shops' element={<PrivateRoute><Shops></Shops></PrivateRoute>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/booking/:serviceId' element={<Booking></Booking>}></Route>
            <Route path='/about' element={<PrivateRoute><About></About></PrivateRoute>}></Route>
            <Route path='/doctor' element={<Doctors></Doctors>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
