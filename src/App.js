import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import UsersDashboard from './Pages/Users_Dashboard/UserDashboard';
import ResetPassword from './Pages/Login/ResetPassword';
import Signup from './Pages/Signup/Signup';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDasboard from './Pages/Admin_Dasboard/AdminDasboard';
import{ ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to='/login'/>} />
       <Route path="/login" element={<Login />} />
       <Route path='/dashboard' element={<UsersDashboard />} />
       <Route path='/admindashboard' element={<AdminDasboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} pauseOnHover={false} />
    </Router>
  );
}

export default App;
