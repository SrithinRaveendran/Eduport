import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Testimonials.css';

const AVA = 'https://stackbros.in/eduport/landing/assets/images/avatar/';

const mentors = [
  { name: 'Lori Stevens', role: 'Tutor of physic', img: '09.jpg' },
  { name: 'Billy Vasquez', role: 'Tutor of chemistry', img: '04.jpg' },
  { name: 'Larry Lawson', role: 'Tutor of technology', img: '02.jpg' },
];

const reviews = [
  {
    id: 1,
    text: 'Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing.',
    name: 'Carolyn Ortiz',
    rating: 5,
    img: '01.jpg',
  },
  {
    id: 2,
    text: 'At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending.',
    name: 'Dennis Barrett',
    rating: 5,
    img: '03.jpg',
  },
];

function Stars({ count }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= count ? 'star filled' : 'star'}>★</span>
      ))}
    </span>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  return (
    <section className="testimonials-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Some valuable feedback from our students</h2>
          <p className="section-sub">
            Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty
            direct me so. Departure defective arranging rapturous did believe him all had supported.
          </p>
          <a href="#" className="btn btn-outline-primary-edu rounded-pill px-4 mt-2">View Reviews</a>
        </div>

        <Row className="align-items-center g-5">
          {/* Left: Active review */}
          <Col lg={6}>
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{review.text}</p>
              <div className="d-flex align-items-center gap-3 mt-3">
                <img src={AVA + review.img} alt={review.name} className="reviewer-avatar" />
                <div>
                  <div className="reviewer-name">{review.name}</div>
                  <Stars count={review.rating} />
                </div>
              </div>
              {/* Dots */}
              <div className="testimonial-dots mt-4">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === active ? 'active' : ''}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>
          </Col>

          {/* Right: Mentors + Rating summary */}
          <Col lg={6}>
            <div className="mentors-panel">
              <h5 className="mentors-heading">100+ Verified Mentors</h5>
              <div className="mentors-list">
                {mentors.map((m) => (
                  <div key={m.name} className="mentor-row d-flex align-items-center gap-3">
                    <img src={AVA + m.img} alt={m.name} className="mentor-avatar" />
                    <div>
                      <div className="mentor-name">{m.name}</div>
                      <div className="mentor-role">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rating summary */}
              <div className="rating-summary mt-4">
                <div className="big-rating">4.5/5.0</div>
                <Stars count={5} />
                <div className="rating-base text-muted mt-1">Based on 3265 ratings</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
