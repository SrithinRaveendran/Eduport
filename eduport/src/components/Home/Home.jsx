import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import PopularCourses from './PopularCourses';
import BecomeInstructor from './BecomeInstructor';
import TrendingCourses from './TrendingCourses';
import Testimonials from './Testimonials';
import Footer from './Footer';


function Home() {

  const [ALL_COURSES, setAllCourses] = useState([])

  const CourseDataAPi = async () => {
    
    try {
      const data = await axios.get("http://localhost:5000/course")
      await console.log(data.data)
      await setAllCourses(data.data)
    } catch (e) {
      console.log(e.message)
    }


  }

  useEffect(() => {
    CourseDataAPi()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <PopularCourses ALL_COURSES={ALL_COURSES} />
      <BecomeInstructor />
      <TrendingCourses trendingCourse = {ALL_COURSES}/>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
