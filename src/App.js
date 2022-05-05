
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Home from './Home/Home';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import NotFound from './NotFound/NotFound';
import Register from './Register/Register';
// import Order from './Order/Order';

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/order" element={<Order />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
