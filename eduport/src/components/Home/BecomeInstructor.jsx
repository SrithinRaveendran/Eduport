import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './styles/BecomeInstructor.css';


export default function BecomeInstructor() {
  const Navigate = useNavigate()
  const onTeachClick=()=>{
    Navigate("/becomeInstructor")
  }
  return (
    <section className="become-instructor-section">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={8} className="text-center">
            <div className="instructor-icon mb-3">👨‍🏫</div>
            <h2 className="instructor-title">Become an Instructor!</h2>
            <p className="instructor-text">
              Speedily say has suitable disposal add boy. On forth doubt miles of child.
              Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.
            </p>
            <a onClick={()=>onTeachClick()} className="btn btn-primary-edu btn-lg rounded-pill px-5 mt-2">
              Start Teaching Today
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
