import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import './styles/Hero.css';

const avatars = [
  'https://stackbros.in/eduport/landing/assets/images/avatar/01.jpg',
  'https://stackbros.in/eduport/landing/assets/images/avatar/02.jpg',
  'https://stackbros.in/eduport/landing/assets/images/avatar/03.jpg',
  'https://stackbros.in/eduport/landing/assets/images/avatar/04.jpg',
];

const techIcons = [
  { src: 'https://stackbros.in/eduport/landing/assets/images/client/science.svg', alt: 'Science' },
  { src: 'https://stackbros.in/eduport/landing/assets/images/client/angular.svg', alt: 'Angular' },
  { src: 'https://stackbros.in/eduport/landing/assets/images/client/figma.svg', alt: 'Figma' },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-85">

          {/* Left: Text */}
          <Col lg={6} className="hero-text-col">
            <h1 className="hero-title">
              Limitless learning<br />
              <span className="hero-highlight">at your fingertips</span>
            </h1>
            <p className="hero-subtitle">
              Online learning and teaching marketplace with 5K+ courses &amp; 10M students.
              Taught by experts to help you acquire new skills.
            </p>

            {/* Features list */}
            <ul className="hero-features">
              <li><span className="feature-dot" />Learn with experts</li>
              <li><span className="feature-dot" />Get certificate</li>
              <li><span className="feature-dot" />Get membership</li>
            </ul>

            {/* CTA buttons */}
            <div className="hero-cta d-flex align-items-center gap-3 flex-wrap">
              <a href="#" className="btn btn-primary-edu btn-lg rounded-pill px-5">
                Get Started
              </a>
              <a href="https://www.youtube.com/embed/tXHviS-4ygo" className="btn-video d-flex align-items-center gap-2">
                <span className="play-btn">&#9654;</span>
                Watch video
              </a>
            </div>

            {/* Tech icons */}
            <div className="hero-tech-icons d-flex gap-3 mt-4">
              {techIcons.map((icon) => (
                <div key={icon.alt} className="tech-icon-wrap">
                  <img src={icon.src} alt={icon.alt} height="40" />
                </div>
              ))}
            </div>
          </Col>

          {/* Right: Image / Cards */}
          <Col lg={6} className="hero-image-col position-relative">

            {/* Congratulations Card */}
            <div className="hero-card congrats-card">
              <div className="d-flex align-items-center gap-2">
                <span className="congrats-icon">🎓</span>
                <div>
                  <div className="congrats-title">Congratulations</div>
                  <div className="congrats-sub">Your admission completed</div>
                </div>
              </div>
            </div>

            {/* Daily Students Card */}
            <div className="hero-card students-card">
              <div className="students-label">Our daily new students</div>
              <div className="d-flex align-items-center gap-1 mt-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`student-${i}`}
                    className="student-avatar"
                  />
                ))}
                <span className="students-count">1K+</span>
              </div>
            </div>

            {/* Hero illustration placeholder */}
            <div className="hero-illustration">
              <img
                src="https://stackbros.in/eduport/landing/assets/images/element/07.png"
                alt="Learning illustration"
                className="hero-img"
              />
            </div>
          </Col>

        </Row>
      </Container>

      {/* Decorative background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
    </section>
  );
}
