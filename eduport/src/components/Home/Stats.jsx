import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Stats.css';

const stats = [
  { value: 10,  suffix: 'K',  label: 'Online Courses' },
  { value: 200, suffix: '+',  label: 'Expert Tutors' },
  { value: 8,   suffix: 'K+', label: 'Online Students' },
  { value: 5,   suffix: 'K+', label: 'Certified Courses' },
];

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ stat, animate }) {
  const count = useCountUp(stat.value, 1500, animate);
  return (
    <Col sm={6} lg={3} className="stat-item text-center">
      <div className="stat-number">
        {count}<span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </Col>
  );
}

export default function Stats() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <Container>
        <Row className="g-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} animate={animate} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
