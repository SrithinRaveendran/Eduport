import { useState } from 'react';
import './Register.css';
import axios, {} from "axios"

const FEATURES = [
  { icon: '🎓', text: 'Access 200+ premium courses' },
  { icon: '📜', text: 'Earn verified certificates' },
  { icon: '🌍', text: 'Learn from top instructors worldwide' },
  { icon: '📱', text: 'Study on any device, anytime' },
];

const STATS = [
  { value: '12k+', label: 'Active Students' },
  { value: '200+', label: 'Courses' },
  { value: '4.8★', label: 'Avg Rating' },
];

const COUNTRY_CODES = [
  { flag: '🇺🇸', code: '+1' },
  { flag: '🇮🇳', code: '+91' },
  { flag: '🇬🇧', code: '+44' },
  { flag: '🇦🇺', code: '+61' },
];

function getStrength(pw) {
  if (!pw) return { score: 0, label: '', cls: '' };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const map = ['', 'weak', 'fair', 'good', 'strong'];
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  return { score, label: labels[score], cls: map[score] };
}

export default function Register() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [countryIdx, setCountryIdx] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const strength = getStrength(form.password);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^\d{7,15}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid phone number';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 8) e.password = 'Password must be at least 8 characters';
    if (!agreed) e.agreed = 'You must agree to the terms';
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1600);

    try{
      const registerapi = await axios.post("http://localhost:5000/register",form)
      
      
    }
    catch(e){
      console.log(e.message,"wronggg")
    }

  };

  return (
    <div className="auth-page">

      {/* ── LEFT PANEL ── */}
      <div className="auth-left">
        <div className="auth-left__logo">Edu<span>port</span></div>

        <div className="auth-left__content">
          <div className="auth-left__tag">✦ Join 12k+ learners</div>

          <h2 className="auth-left__title">
            Unlock Your <span>Learning</span> Journey Today
          </h2>

          <p className="auth-left__desc">
            Create your free account and get instant access to hundreds of expert-led
            courses, certificates, and a global community of learners.
          </p>

          <div className="auth-left__features">
            {FEATURES.map(f => (
              <div className="auth-feature" key={f.text}>
                <div className="auth-feature__icon">{f.icon}</div>
                <span className="auth-feature__text">{f.text}</span>
              </div>
            ))}
          </div>

          <div className="auth-left__stats">
            {STATS.map(s => (
              <div className="auth-stat" key={s.label}>
                <div className="auth-stat__value">{s.value}</div>
                <div className="auth-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="auth-left__footer">
          <span className="auth-left__footer-text">©2024 Eduport</span>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Help</a>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="auth-right">
        <div className="auth-right__top">
          Already have an account? <a href="#">Sign in</a>
        </div>

        <div className="auth-form-wrap">
          {success ? (
            <div className="auth-success">
              <div className="auth-success__icon">🎉</div>
              <div className="auth-success__title">Account Created!</div>
              <p className="auth-success__text">
                Welcome to Eduport, <strong>{form.name.split(' ')[0]}</strong>!<br />
                Your account is ready. Start exploring courses.
              </p>
            </div>
          ) : (
            <>
              <div className="auth-form__header">
                <div className="auth-form__eyebrow">Get started free</div>
                <h1 className="auth-form__title">Create your account</h1>
                <p className="auth-form__subtitle">
                  Join thousands of students already learning on{' '}
                  <a href="#">Eduport</a>.
                </p>
              </div>

              {/* Social login */}
              <div className="social-login">
                <button className="social-login-btn" type="button">
                  <svg width="18" height="18" viewBox="0 0 48 48">
                    <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.4c-.5 2.7-2.1 5-4.4 6.5v5.4h7.1c4.2-3.9 6.6-9.6 6.6-15.9z"/>
                    <path fill="#34A853" d="M24 47c6.2 0 11.4-2 15.2-5.5l-7.1-5.4c-2 1.4-4.6 2.2-8.1 2.2-6.2 0-11.5-4.2-13.4-9.8H3.3v5.6C7.1 41.8 15 47 24 47z"/>
                    <path fill="#FBBC04" d="M10.6 28.5c-.5-1.4-.8-2.9-.8-4.5s.3-3.1.8-4.5v-5.6H3.3A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8 0 0 .7 1.4.7 1.3l7.3-7.6z"/>
                    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.5l6.8-6.8C35.4 2.4 30.2 0 24 0 15 0 7.1 5.2 3.3 12.8l7.3 5.7C12.5 13.7 17.8 9.5 24 9.5z"/>
                  </svg>
                  Google
                </button>
                <button className="social-login-btn" type="button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.87v2.28h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z"/>
                  </svg>
                  Facebook
                </button>
              </div>

              <div className="auth-divider">or register with email</div>

              <form onSubmit={handleSubmit} noValidate>

                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Full Name <span>*</span>
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                    </span>
                    <input
                      id="name"
                      type="text"
                      className={`form-input${errors.name ? ' error' : form.name ? ' valid' : ''}`}
                      placeholder="e.g. Louis Ferguson"
                      value={form.name}
                      onChange={handleChange('name')}
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && <div className="form-error">⚠ {errors.name}</div>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address <span>*</span>
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
                      </svg>
                    </span>
                    <input
                      id="email"
                      type="email"
                      className={`form-input${errors.email ? ' error' : form.email ? ' valid' : ''}`}
                      placeholder="example@gmail.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && <div className="form-error">⚠ {errors.email}</div>}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number <span>*</span>
                  </label>
                  <div className="phone-row">
                    <div
                      className="phone-flag-select"
                      onClick={() => setCountryIdx(i => (i + 1) % COUNTRY_CODES.length)}
                      title="Click to change country code"
                    >
                      <span>{COUNTRY_CODES[countryIdx].flag}</span>
                      <span style={{ fontSize: '0.78rem' }}>{COUNTRY_CODES[countryIdx].code}</span>
                    </div>
                    <div className="input-wrapper">
                      <span className="input-icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </span>
                      <input
                        id="phone"
                        type="tel"
                        className={`form-input${errors.phone ? ' error' : form.phone ? ' valid' : ''}`}
                        placeholder="98765 43210"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                  {errors.phone && <div className="form-error">⚠ {errors.phone}</div>}
                </div>

                {/* Password */}
                <div className="form-group">
                  <label className="form-label" htmlFor="password">
                    Password <span>*</span>
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </span>
                    <input
                      id="password"
                      type={showPw ? 'text' : 'password'}
                      className={`form-input has-right-icon${errors.password ? ' error' : form.password ? ' valid' : ''}`}
                      placeholder="Min. 8 characters"
                      value={form.password}
                      onChange={handleChange('password')}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="input-icon-right"
                      onClick={() => setShowPw(v => !v)}
                      aria-label={showPw ? 'Hide password' : 'Show password'}
                    >
                      {showPw ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                          <line x1="1" y1="1" x2="23" y2="23"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                      )}
                    </button>
                  </div>
                  {form.password && (
                    <div className="password-strength">
                      <div className="strength-bar">
                        {[1, 2, 3, 4].map(n => (
                          <div
                            key={n}
                            className={`strength-segment${strength.score >= n ? ` ${strength.cls}` : ''}`}
                          />
                        ))}
                      </div>
                      <span className={`strength-label ${strength.cls}`}>
                        {strength.label} password
                      </span>
                    </div>
                  )}
                  {errors.password && <div className="form-error">⚠ {errors.password}</div>}
                </div>

                {/* Terms */}
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={e => { setAgreed(e.target.checked); if (errors.agreed) setErrors(p => ({ ...p, agreed: '' })); }}
                  />
                  <label htmlFor="terms">
                    I agree to the <a href="#">Terms & Conditions</a> and{' '}
                    <a href="#">Privacy Policy</a> of Eduport.
                  </label>
                </div>
                {errors.agreed && <div className="form-error" style={{ marginTop: '-0.75rem', marginBottom: '0.85rem' }}>⚠ {errors.agreed}</div>}

                <button
                  type="submit"
                  className={`btn-submit${loading ? ' loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Creating account…
                    </>
                  ) : (
                    <>
                      Create Free Account
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>

              </form>
            </>
          )}
        </div>
      </div>

      {/* spinner keyframe via style tag */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
