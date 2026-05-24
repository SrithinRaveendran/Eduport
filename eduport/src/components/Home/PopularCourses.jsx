import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './styles/PopularCourses.css';
import { useEffect } from 'react';
import axios from 'axios';

const BASE = 'https://stackbros.in/eduport/landing/assets/images/courses/4by3/';

// const ALL_COURSES = [
//   { id: 1, img: '08.jpg', level: 'All level', title: 'Sketch from A to Z: for app designer', rating: 4.0, duration: '12h 56m', lectures: 15, cat: 'Design' },
//   { id: 2, img: '02.jpg', level: 'Beginner', title: 'Graphic Design Masterclass', rating: 4.5, duration: '9h 56m', lectures: 65, cat: 'Design' },
//   { id: 3, img: '03.jpg', level: 'Beginner', title: 'Create a Design System in Figma', rating: 4.5, duration: '5h 56m', lectures: 32, cat: 'Design' },
//   { id: 4, img: '07.jpg', level: 'Beginner', title: 'Deep Learning with React-Native', rating: 4.0, duration: '18h 56m', lectures: 99, cat: 'Development' },
//   { id: 5, img: '11.jpg', level: 'All level', title: 'Build Responsive Websites with HTML', rating: 4.0, duration: '15h 30m', lectures: 68, cat: 'Development' },
//   { id: 6, img: '12.jpg', level: 'Beginner', title: 'Build Websites with CSS', rating: 4.5, duration: '36h 30m', lectures: 72, cat: 'Development' },
//   { id: 7, img: '04.jpg', level: 'All level', title: 'Learn Invision', rating: 3.5, duration: '6h 56m', lectures: 82, cat: 'Design' },
//   { id: 8, img: '09.jpg', level: 'All level', title: 'JavaScript: Full Understanding', rating: 5.0, duration: '35h 20m', lectures: 89, cat: 'Development' },
//   { id: 9, img: '05.jpg', level: 'Beginner', title: 'The Complete Web Development in Python', rating: 4.5, duration: '10h 00m', lectures: 26, cat: 'Development' },
//   { id: 10, img: '06.jpg', level: 'Intermediate', title: 'Angular – The Complete Guider', rating: 4.5, duration: '9h 32m', lectures: 42, cat: 'Development' },
//   { id: 11, img: '01.jpg', level: 'Beginner', title: 'Digital Marketing Masterclass', rating: 4.5, duration: '6h 56m', lectures: 82, cat: 'Marketing' },
//   { id: 12, img: '10.jpg', level: 'Intermediate', title: 'Bootstrap 5 From Scratch', rating: 4.5, duration: '25h 56m', lectures: 38, cat: 'Development' },
// ];


const sampleimage = "https://images.unsplash.com/photo-1633356122544-f134324a6cee"



const TABS = ['All', 'Web Design', 'Development', 'Graphic Design', 'Marketing', 'Finance'];

function StarRating({ rating }) {

  return (
    <span className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? 'star filled' : 'star'}>★</span>
      ))}
    </span>
  );
}

function CourseCard({ course }) {


  return (
    <Col md={6} lg={4} className="mb-4">
      <div className="course-card">
        <div className="course-img-wrap">
          {console.log(course)}
          <img src={course.imgae} alt={course.title} className="course-img" />
          <span className={`level-badge ${course.level.toLowerCase().replace(' ', '-')}`}>{course.level}</span>
        </div>
        <div className="course-body">
          <h6 className="course-title">{course.title}</h6>
          <div className="course-rating d-flex align-items-center gap-2">
            <StarRating rating={course.rating} />
            {/* <span className="rating-val">{course.rating.toFixed(1)}/5.0</span> */}
          </div>
          <hr className="course-divider" />
          <div className="course-meta d-flex justify-content-between">
            <span>⏱ {course.duration}</span>
            <span>📚 {course.intructor}</span>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default function PopularCourses() {

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


  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? ALL_COURSES
    : ALL_COURSES.filter(c =>
      activeTab === 'Web Design' ? c.cat === 'Design' :
        activeTab === 'Graphic Design' ? c.cat === 'Design' :
          c.cat === activeTab
    );

  return (
    <section className="popular-courses-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Most Popular Courses</h2>
          <p className="section-sub">Choose from hundreds of courses from specialist organizations</p>
        </div>

        {/* Tab filter */}
        <Nav className="course-tabs justify-content-center mb-4">
          {TABS.map((tab) => (
            <Nav.Item key={tab}>
              <button
                className={`course-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </Nav.Item>
          ))}
        </Nav>

        <Row>
          {ALL_COURSES.map(each=>(<CourseCard key={each._id} course={each}/>))}

          {/* <CourseCard key={course.id} course={ALL_COURSES} /> */}
          {/* {filtered.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
         ))} */}
        </Row>

        <div className="text-center mt-3">
          <a href="#" className="btn btn-outline-primary-edu rounded-pill px-5">
            View All Courses
          </a>
        </div>
      </Container>
    </section>
  );
}
