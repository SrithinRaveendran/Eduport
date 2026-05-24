import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Footer.css';

const LOGO_LIGHT = 'https://stackbros.in/eduport/landing/assets/images/logo.svg';
const GOOGLE_PLAY = 'https://stackbros.in/eduport/landing/assets/images/client/google-play.svg';
const APP_STORE = 'https://stackbros.in/eduport/landing/assets/images/client/app-store.svg';

const footerLinks = {
  Company: ['About us', 'Contact us', 'News and Blogs', 'Library', 'Career'],
  Community: ['Documentation', 'FAQ', 'Forum', 'Sitemap'],
  Teaching: ['Become a teacher', 'How to guide', 'Terms & Conditions'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="g-4 mb-4">
          {/* Brand column */}
          <Col lg={4} md={6}>
            <img src={LOGO_LIGHT} alt="Eduport" height="36" className="footer-logo mb-3" />
            <p className="footer-about">
              Eduport education theme, built specifically for the education centers
              which is dedicated to teaching and involve learners.
            </p>

            {/* Social icons */}
            <div className="social-icons d-flex gap-3 mt-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((s) => (
                <a key={s} href="#" className="social-icon" aria-label={s}>
                  {s === 'facebook' && '𝑓'}
                  {s === 'twitter' && '𝕏'}
                  {s === 'instagram' && '◎'}
                  {s === 'linkedin' && 'in'}
                </a>
              ))}
            </div>
          </Col>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <Col key={heading} lg={2} md={3} sm={4}>
              <h6 className="footer-heading">{heading}</h6>
              <ul className="footer-links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          {/* Contact column */}
          <Col lg={3} md={6}>
            <h6 className="footer-heading">Contact</h6>
            <p className="footer-contact">
              Toll free: <strong>+1234 568 963</strong><br />
              <span className="text-muted small">(9:AM to 8:PM IST)</span>
            </p>
            <p className="footer-contact">
              Email: <strong>example@gmail.com</strong>
            </p>

            {/* App store buttons */}
            <div className="app-buttons d-flex flex-column gap-2 mt-3">
              <a href="#"><img src={GOOGLE_PLAY} alt="Google Play" height="36" /></a>
              <a href="#"><img src={APP_STORE} alt="App Store" height="36" /></a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom d-flex flex-wrap align-items-center justify-content-between gap-3">
          <p className="mb-0 text-muted small">
            Copyrights ©2024 Eduport. Build by{' '}
            <a href="https://www.stackbros.in/" className="footer-brand-link">StackBros</a>
          </p>
          <div className="footer-bottom-links d-flex gap-4">
            <a href="#" className="footer-link small">Terms of use</a>
            <a href="#" className="footer-link small">Privacy policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
