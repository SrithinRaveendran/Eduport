import { useState } from 'react';
import './SignInPage.css';
import axios from "axios"
import { useNavigate, useNavigation } from "react-router-dom";

const AVATARS = [
  'https://stackbros.in/eduport/landing/assets/images/avatar/01.jpg',
  'https://stackbros.in/eduport/landing/assets/images/avatar/02.jpg',
  'https://stackbros.in/eduport/landing/assets/images/avatar/05.jpg',
  'https://stackbros.in/eduport/landing/assets/images/avatar/07.jpg',
];

/* ── SVG ICONS ── */
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
  </svg>
);
const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconEye = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconEyeOff = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const IconSpinner = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 0.8s linear infinite' }}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);
const IconGoogle = () => (
  <svg width="18" height="18" viewBox="0 0 48 48">
    <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.4c-.5 2.7-2.1 5-4.4 6.5v5.4h7.1c4.2-3.9 6.6-9.6 6.6-15.9z"/>
    <path fill="#34A853" d="M24 47c6.2 0 11.4-2 15.2-5.5l-7.1-5.4c-2 1.4-4.6 2.2-8.1 2.2-6.2 0-11.5-4.2-13.4-9.8H3.3v5.6C7.1 41.8 15 47 24 47z"/>
    <path fill="#FBBC04" d="M10.6 28.5c-.5-1.4-.8-2.9-.8-4.5s.3-3.1.8-4.5v-5.6H3.3A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.3-5.7 .7 -.6z"/>
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.5l6.8-6.8C35.4 2.4 30.2 0 24 0 15 0 7.1 5.2 3.3 12.8l7.3 5.7C12.5 13.7 17.8 9.5 24 9.5z"/>
  </svg>
);
const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.87v2.28h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z"/>
  </svg>
);

export default function SignInPage() {
  const [form, setForm]       = useState({ email: '', password: '' });
  const [errors, setErrors]   = useState({});
  const [showPw, setShowPw]   = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()

  const validate = () => {
    const e = {};
    if (!form.email.trim())
      e.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email address';
    if (!form.password)
      e.password = 'Password is required';
    else if (form.password.length < 6)
      e.password = 'Password must be at least 6 characters';
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

   
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    console.log(form,"from frontend")
    const errs = validate();
    // if (Object.keys(errs).length) { setErrors(errs); return; }
    // setLoading(true);
    // setTimeout(() => { setLoading(false); setSuccess(true); }, 1600);
    try{
      const loginapi =  await axios.post("https://eduport-sty7.onrender.com/login", form)
      await localStorage.setItem("token",loginapi.data.token)
      console.log(loginapi)
      navigate("/")
    }
    catch(e){
      console.log(e.message,"login issue")
    }
  };

  return (
    <div className="signin-page">

      {/* ══ LEFT — FORM PANEL ══ */}
      <div className="signin-left">

        <div className="signin-left__top">
          <div className="signin-logo">Edu<span>port</span></div>
          <span className="signin-left__top-link">
            No account? <a href="/register">Sign up free</a>
          </span>
        </div>

        <div className="signin-form-wrap">
          {success ? (
            /* ── SUCCESS STATE ── */
            <div className="signin-success">
              <div className="signin-success__icon">✓</div>
              <div className="signin-success__title">Welcome back!</div>
              <p className="signin-success__text">
                You've signed in successfully.<br />
                Redirecting you to your dashboard…
              </p>
              <button className="btn-dashboard">
                Go to Dashboard <IconArrow />
              </button>
            </div>
          ) : (
            <>
              <div className="signin-form__eyebrow">Welcome back</div>
              <h1 className="signin-form__title">Sign in to Eduport</h1>
              <p className="signin-form__subtitle">
                Don't have an account? <a href="/register">Create one free</a>
              </p>

              {/* Social buttons */}
              {/* <div className="social-row">
                <button className="social-btn-card" type="button">
                  <IconGoogle /> Continue with Google
                </button>
                <button className="social-btn-card" type="button">
                  <IconFacebook /> Continue with Facebook
                </button>
              </div> */}

              <div className="form-divider">or sign in with email</div>

              <form onSubmit={handleSubmit} noValidate>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label" htmlFor="si-email">Email Address</label>
                  <div className="input-wrap">
                    <span className="i-left"><IconMail /></span>
                    <input
                      id="si-email"
                      type="email"
                      className={`form-field${errors.email ? ' is-error' : form.email ? ' is-ok' : ''}`}
                      placeholder="example@gmail.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && <div className="field-error">⚠ {errors.email}</div>}
                </div>

                {/* Password */}
                <div className="form-group">
                  <label className="form-label" htmlFor="si-pw">Password</label>
                  <div className="input-wrap">
                    <span className="i-left"><IconLock /></span>
                    <input
                      id="si-pw"
                      type={showPw ? 'text' : 'password'}
                      className={`form-field has-right${errors.password ? ' is-error' : form.password ? ' is-ok' : ''}`}
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={handleChange('password')}
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="i-right"
                      onClick={() => setShowPw(v => !v)}
                      aria-label={showPw ? 'Hide password' : 'Show password'}
                    >
                      {showPw ? <IconEyeOff /> : <IconEye />}
                    </button>
                  </div>
                  {errors.password && <div className="field-error">⚠ {errors.password}</div>}
                </div>

                {/* Remember / Forgot */}
                <div className="remember-row">
                  <label className="remember-check">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={e => setRemember(e.target.checked)}
                    />
                    Remember me
                  </label>
                  <a href="#" className="forgot-link">Forgot password?</a>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-signin"
                  disabled={loading}
                >
                  {loading ? (
                    <><IconSpinner /> Signing in…</>
                  ) : (
                    <>Sign In <IconArrow /></>
                  )}
                </button>

              </form>
            </>
          )}
        </div>
      </div>

      {/* ══ RIGHT — BRAND PANEL ══ */}
      <div className="signin-right">
        <div className="signin-right__inner">

          <div className="signin-right__tag">✦ Trusted by 12k+ students</div>

          <h2 className="signin-right__title">
            Continue Your <span>Learning</span> Journey
          </h2>

          <p className="signin-right__desc">
            Pick up right where you left off. Your courses, certificates, and
            progress are all waiting for you.
          </p>

          {/* Testimonial card */}
          <div className="testimonial-card">
            <div className="testimonial-card__stars">★★★★★</div>
            <p className="testimonial-card__text">
              "Eduport completely changed how I approach learning. The courses are
              structured brilliantly and the instructors are world-class. I landed
              my dream job within 3 months!"
            </p>
            <div className="testimonial-card__author">
              <img
                src="https://stackbros.in/eduport/landing/assets/images/avatar/09.jpg"
                alt="Jacqueline Miller"
                className="testimonial-card__avatar"
              />
              <div>
                <div className="testimonial-card__name">Jacqueline Miller</div>
                <div className="testimonial-card__role">UX Designer · Google</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="signin-stats">
            {[
              { value: '12k+', label: 'Active Students' },
              { value: '200+', label: 'Expert Courses' },
              { value: '4.8★', label: 'Avg Rating' },
            ].map(s => (
              <div key={s.label}>
                <div className="signin-stat__value">{s.value}</div>
                <div className="signin-stat__label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Avatar stack */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div className="avatar-stack">
              {AVATARS.map((src, i) => (
                <img key={i} src={src} alt="" className="avatar-stack__item" />
              ))}
              <div className="avatar-stack__more">+8k</div>
            </div>
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
              Join learners already enrolled today
            </span>
          </div>

        </div>

        <div className="signin-right__footer">
          <span className="signin-right__footer-text">©2024 Eduport</span>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Help</a>
        </div>
      </div>

    </div>
  );
}
