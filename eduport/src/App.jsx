import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import './styles/App.css';

// import Navbar from './components/Home/Navbar';
// import Hero from './components/Home/Hero';
// import Stats from './components/Home/Stats';
// import PopularCourses from './components/Home/PopularCourses';
// import BecomeInstructor from './components/Home/BecomeInstructor';
// import TrendingCourses from './components/Home/TrendingCourses';
// import Testimonials from './components/Home/Testimonials';
// import Footer from './components/Home/Footer';


import Home from './components/Home/Home';
import DetailPage from './components/Detail-page/DetailPage';
import Register from './components/Register/Register'
import SignInPage from './components/Login/SignInPage'
import BecomeInstructor from './components/becomeInstructor/BecomeInstructor';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<SignInPage/>} />
    </Routes>
    
    <ProtectedRoute>
      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/Detail-page/:id' element={<DetailPage />} />
        
        <Route path="/becomeInstructor" element={<BecomeInstructor/>} />
        
      </Routes>
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;
