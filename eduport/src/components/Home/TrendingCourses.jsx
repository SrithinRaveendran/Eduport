import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/TrendingCourses.css';
import { useNavigate } from 'react-router-dom';

const BASE = 'https://stackbros.in/eduport/landing/assets/images/courses/4by3/';
const Instructorimg = 'https://cdn-icons-png.flaticon.com/512/3410/3410150.png';

// const trending = [
//   {
//     id: 1,
//     img: '14.jpg',
//     cat: 'Design',
//     level: 'Beginner',
//     title: 'The Complete Digital Marketing Course - 8 Course in 1',
//     rating: 4.5,
//     reviews: 6500,
//     students: 6500,
//     duration: '6h 56m',
//     lectures: 82,
//     instructor: 'Larry Lawson',
//     instructorImg: '10.jpg',
//     price: 'Free',
//     isFree: true,
//   },
//   {
//     id: 2,
//     img: '15.jpg',
//     cat: 'Development',
//     level: 'All level',
//     title: 'Angular – The Complete Guide (2021 Edition)',
//     rating: 4.0,
//     reviews: 3500,
//     students: 4500,
//     duration: '12h 45m',
//     lectures: 65,
//     instructor: 'Billy Vasquez',
//     instructorImg: '04.jpg',
//     price: '$255',
//     isFree: false,
//   },
//   {
//     id: 3,
//     img: '17.jpg',
//     cat: 'Design',
//     level: 'Beginner',
//     title: 'Time Management Mastery: Do More, Stress Less',
//     rating: 4.5,
//     reviews: 2000,
//     students: 8000,
//     duration: '24h 56m',
//     lectures: 55,
//     instructor: 'Lori Stevens',
//     instructorImg: '09.jpg',
//     price: '$500',
//     isFree: false,
//   },
//   {
//     id: 4,
//     img: '16.jpg',
//     cat: 'Design',
//     level: 'Beginner',
//     title: 'Time Management Mastery: Do More, Stress Less',
//     rating: 4.0,
//     reviews: 2000,
//     students: 1200,
//     duration: '09h 56m',
//     lectures: 21,
//     instructor: 'Frances Guerrero',
//     instructorImg: '01.jpg',
//     price: '$200',
//     isFree: false,
//   },
// ];

function StarRating({ rating }) {
  return (
    <span className="stars-sm">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= Math.round(rating) ? 'star filled' : 'star'}>★</span>
      ))}
    </span>
  );
}

function TrendingCard({ course }) {
  const navigate = useNavigate()
  const onCardClick = (id)=>{
    navigate(`/Detail-page/${id}`)

  }
  return (
    <Col md={6} xl={3} className="mb-4">
      <div className="trending-card h-100" onClick={()=>onCardClick(course._id)}>
        {/* Image */}
        <div className="trending-img-wrap">
          <img src={ course.image} alt={course.title} className="trending-img" />
          <div className="trending-badges">
            <span className="badge-cat">{course.category}</span>
            <span className="badge-level">{course.level}</span>
          </div>
        </div>

        {/* Body */}
        <div className="trending-body d-flex flex-column flex-grow-1">
          <h6 className="trending-title">{course.title}</h6>

          <div className="trending-rating d-flex align-items-center gap-2 mb-1">
            {/* <span className="rating-num">{course.rating}</span>
            <StarRating rating={course.rating} /> */}
            {/* <span className="rating-count">({course.reviews.toLocaleString()})</span> */}
          </div>

          <div className="trending-meta text-muted small mb-2">
            {/* {course.students.toLocaleString()}  */}
            Students &nbsp;·&nbsp; {course.duration} &nbsp;·&nbsp; {course.lessons} Chapters
          </div>

          <hr className="trending-divider" />

          {/* Instructor + Price */}
          <div className="trending-footer d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img src={Instructorimg} alt={course.instructor} className="instr-avatar" />
              <span className="instr-name">{course.instructor}</span>
            </div>
            <span className={`course-price ${course.isFree ? 'price-free' : ''}`}>
              {course.price}
            </span>
          </div>

          <button className="btn btn-outline-primary-edu btn-sm mt-3 rounded-pill">
            Add to cart
          </button>
        </div>
      </div>
    </Col>
  );
}

export default function TrendingCourses(props) {
  const {trendingCourse} = props
  console.log(trendingCourse,"from trendingcourse")
  return (
    <section className="trending-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Our Trending Courses</h2>
          <p className="section-sub">Check out most 🔥 courses in the market</p>
        </div>

        <Row>
          {trendingCourse.slice(0,4).map((course) => (
            <TrendingCard key={course._id} course={course} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
