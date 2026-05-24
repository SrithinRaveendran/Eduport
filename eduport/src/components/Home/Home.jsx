import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import PopularCourses from './PopularCourses';
import BecomeInstructor from './BecomeInstructor';
import TrendingCourses from './TrendingCourses';
import Testimonials from './Testimonials';
import Footer from './Footer';

function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <PopularCourses />
      <BecomeInstructor />
      <TrendingCourses />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
