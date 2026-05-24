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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
