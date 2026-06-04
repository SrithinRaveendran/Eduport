import { useState, useRef } from 'react';
import './BecomeInstructor.css';

/* ── CONSTANTS ── */
const STEPS = ['Personal Info', 'Qualifications', 'Teaching Details', 'Review'];

const EXPERTISE_AREAS = [
  'Web Development', 'Digital Marketing', 'UI/UX Design', 'Data Science',
  'Business', 'Photography', 'Music', 'Personal Development',
  'Finance', 'Mobile Development', 'Machine Learning', 'Cybersecurity',
];

const EXPERIENCE_OPTIONS = [
  '1 – 2 years', '2 – 5 years', '5 – 10 years', '10+ years',
];

const INSTRUCTORS = [
  { img: 'https://stackbros.in/eduport/landing/assets/images/avatar/01.jpg', name: 'Louis Ferguson', subject: 'Digital Marketing', students: '9.1k' },
  { img: 'https://stackbros.in/eduport/landing/assets/images/avatar/02.jpg', name: 'Dennis Barrett', subject: 'Web Development', students: '7.4k' },
  { img: 'https://stackbros.in/eduport/landing/assets/images/avatar/05.jpg', name: 'Frances Guerrero', subject: 'UI/UX Design', students: '5.6k' },
];

const PERKS = [
  { icon: '💰', title: 'Earn Revenue', desc: 'Keep up to 70% of your course revenue — paid monthly to your account.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Reach 12,000+ students across 80+ countries on one platform.' },
  { icon: '🛠️', title: 'Full Support', desc: 'Dedicated success team to help you build and market your courses.' },
  { icon: '📈', title: 'Deep Analytics', desc: 'Real-time dashboards to track views, enrollments, and earnings.' },
];

const TIPS = [
  'Use a professional headshot for your profile photo.',
  'List your highest qualification first for credibility.',
  'Be specific about your teaching style in the bio.',
  'Mention any certifications or awards you\'ve received.',
];

/* ── ICONS ── */
const Ico = ({ d, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const IconUser    = () => <Ico d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />;
const IconMail    = () => <Ico d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />;
const IconPhone   = () => <Ico d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />;
const IconGlobe   = () => <Ico d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />;
const IconBook    = () => <Ico d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />;
const IconAward   = () => <Ico d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />;
const IconBriefcase = () => <Ico d="M20 7H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />;
const IconLink    = () => <Ico d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />;
const IconChevron = ({ dir = 'down' }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: dir === 'right' ? 'rotate(-90deg)' : 'none' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const IconSpinner = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ animation: 'spin 0.8s linear infinite' }}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

/* ── INITIAL FORM STATE ── */
const INIT = {
  firstName: '', lastName: '', email: '', phone: '', website: '',
  qualification: '', institution: '', graduationYear: '', experience: '',
  expertise: [],
  courseTitle: '', courseCategory: '', bio: '', teachingStyle: '',
  resume: null, certFile: null,
  agreeTerms: false, agreeQuality: false,
};

export default function BecomeInstructor() {
  const [step, setStep]     = useState(0);
  const [form, setForm]     = useState(INIT);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [drag, setDrag]     = useState('');
  const resumeRef = useRef();
  const certRef   = useRef();

  /* helpers */
  const set = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(p => ({ ...p, [field]: val }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: '' }));
  };

  const toggleExpertise = (tag) => {
    setForm(p => ({
      ...p,
      expertise: p.expertise.includes(tag)
        ? p.expertise.filter(t => t !== tag)
        : [...p.expertise, tag],
    }));
    if (errors.expertise) setErrors(p => ({ ...p, expertise: '' }));
  };

  const handleFile = (field) => (e) => {
    const file = e.target.files?.[0];
    if (file) { setForm(p => ({ ...p, [field]: file })); }
  };

  /* validation per step */
  const validateStep = (s) => {
    const e = {};
    if (s === 0) {
      if (!form.firstName.trim()) e.firstName = 'First name is required';
      if (!form.lastName.trim())  e.lastName  = 'Last name is required';
      if (!form.email.trim())     e.email     = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
      if (!form.phone.trim())     e.phone     = 'Phone number is required';
    }
    if (s === 1) {
      if (!form.qualification.trim()) e.qualification = 'Qualification is required';
      if (!form.institution.trim())   e.institution   = 'Institution is required';
      if (!form.experience)           e.experience    = 'Please select your experience';
      if (form.expertise.length === 0) e.expertise    = 'Select at least one area';
    }
    if (s === 2) {
      if (!form.courseTitle.trim())  e.courseTitle  = 'Course title is required';
      if (!form.courseCategory)      e.courseCategory = 'Select a category';
      if (!form.bio.trim())          e.bio          = 'Bio is required';
      else if (form.bio.trim().length < 80) e.bio   = 'Bio must be at least 80 characters';
      if (!form.teachingStyle.trim()) e.teachingStyle = 'Teaching style is required';
    }
    if (s === 3) {
      if (!form.agreeTerms)   e.agreeTerms  = 'You must accept the terms';
      if (!form.agreeQuality) e.agreeQuality = 'You must agree to quality standards';
    }
    return e;
  };

  const next = () => {
    const e = validateStep(step);
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStep(s => Math.min(s + 1, 3));
  };

  const prev = () => { setErrors({}); setStep(s => Math.max(s - 1, 0)); };

  const handleSubmit = () => {
    const e = validateStep(3);
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  const cls = (field, extra = '') =>
    `form-input${extra}${errors[field] ? ' is-err' : form[field] ? ' is-ok' : ''}`;

  const stepStatus = (i) =>
    i < step ? 'done' : i === step ? 'active' : '';

  return (
    <div>
      {/* NAVBAR */}
      <nav className="ins-nav">
        <div className="ins-nav__logo">Edu<span>port</span></div>
        <button className="ins-nav__back" onClick={() => window.history.back()}>
          ← Back to Home
        </button>
        <a href="/login" className="ins-nav__signin">Sign In</a>
      </nav>

      {/* HERO */}
      <section className="ins-hero">
        <div className="ins-hero__inner">
          <div className="ins-hero__tag">✦ Join our educator community</div>
          <h1 className="ins-hero__title">
            Become an <span>Instructor</span> on Eduport
          </h1>
          <p className="ins-hero__desc">
            Share your expertise with 12,000+ learners worldwide. Build courses,
            earn revenue, and make a lasting impact — all on one platform.
          </p>
          <div className="ins-hero__stats">
            {[
              { value: '12k+', label: 'Active Students' },
              { value: '$2M+', label: 'Earned by Instructors' },
              { value: '200+', label: 'Active Courses' },
              { value: '80+', label: 'Countries Reached' },
            ].map(s => (
              <div key={s.label}>
                <div className="ins-hero__stat-value">{s.value}</div>
                <div className="ins-hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <svg className="ins-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" />
      </svg>

      {/* LAYOUT */}
      <div className="ins-layout">

        {/* FORM CARD */}
        <div className="ins-form-card">
          <div className="ins-form-card__header">
            <div className="ins-form-card__icon">🎓</div>
            <div>
              <div className="ins-form-card__title">Instructor Application</div>
              <div className="ins-form-card__subtitle">Fill in the details below — takes about 5 minutes</div>
            </div>
          </div>

          <div className="ins-form-card__body">
            {/* STEP BAR */}
            <div className="ins-steps">
              {STEPS.map((label, i) => (
                <div className={`ins-step ${stepStatus(i)}`} key={label}>
                  <div className="ins-step__dot">
                    {i < step ? '✓' : i + 1}
                  </div>
                  <span className="ins-step__label">{label}</span>
                </div>
              ))}
            </div>

            {submitted ? (
              /* ── SUCCESS ── */
              <div className="ins-success">
                <div className="ins-success__ring">🎉</div>
                <div className="ins-success__title">Application Submitted!</div>
                <p className="ins-success__text">
                  Thank you, <strong>{form.firstName}</strong>! Your instructor application
                  has been received. Our team will review it and get back to you at{' '}
                  <strong>{form.email}</strong> within 2–3 business days.
                </p>
                <div className="ins-success__actions">
                  <button className="btn-primary"><IconArrow /> Go to Dashboard</button>
                  <button className="btn-ghost" onClick={() => { setForm(INIT); setStep(0); setSubmitted(false); }}>
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* ── STEP 0: PERSONAL INFO ── */}
                {step === 0 && (
                  <div>
                    <div className="form-section-title">Personal Information</div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="fn">First Name <sup>*</sup></label>
                        <div className="input-wrap">
                          <span className="input-icon-l"><IconUser /></span>
                          <input id="fn" type="text" className={cls('firstName')} placeholder="e.g. Louis"
                            value={form.firstName} onChange={set('firstName')} />
                        </div>
                        {errors.firstName && <div className="field-err">⚠ {errors.firstName}</div>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="ln">Last Name <sup>*</sup></label>
                        <div className="input-wrap">
                          <span className="input-icon-l"><IconUser /></span>
                          <input id="ln" type="text" className={cls('lastName')} placeholder="e.g. Ferguson"
                            value={form.lastName} onChange={set('lastName')} />
                        </div>
                        {errors.lastName && <div className="field-err">⚠ {errors.lastName}</div>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="em">Email Address <sup>*</sup></label>
                      <div className="input-wrap">
                        <span className="input-icon-l"><IconMail /></span>
                        <input id="em" type="email" className={cls('email')} placeholder="you@example.com"
                          value={form.email} onChange={set('email')} autoComplete="email" />
                      </div>
                      {errors.email && <div className="field-err">⚠ {errors.email}</div>}
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="ph">Phone Number <sup>*</sup></label>
                        <div className="input-wrap">
                          <span className="input-icon-l"><IconPhone /></span>
                          <input id="ph" type="tel" className={cls('phone')} placeholder="+91 98765 43210"
                            value={form.phone} onChange={set('phone')} />
                        </div>
                        {errors.phone && <div className="field-err">⚠ {errors.phone}</div>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="web">Website / Portfolio</label>
                        <div className="input-wrap">
                          <span className="input-icon-l"><IconGlobe /></span>
                          <input id="web" type="url" className="form-input" placeholder="https://yoursite.com"
                            value={form.website} onChange={set('website')} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 1: QUALIFICATIONS ── */}
                {step === 1 && (
                  <div>
                    <div className="form-section-title">Academic Qualifications</div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="qual">Highest Qualification <sup>*</sup></label>
                      <div className="input-wrap">
                        <span className="input-icon-l"><IconAward /></span>
                        <input id="qual" type="text" className={cls('qualification')}
                          placeholder="e.g. Master of Science in Computer Science"
                          value={form.qualification} onChange={set('qualification')} />
                      </div>
                      {errors.qualification && <div className="field-err">⚠ {errors.qualification}</div>}
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="inst">Institution <sup>*</sup></label>
                        <div className="input-wrap">
                          <span className="input-icon-l"><IconBook /></span>
                          <input id="inst" type="text" className={cls('institution')}
                            placeholder="e.g. Harvard University"
                            value={form.institution} onChange={set('institution')} />
                        </div>
                        {errors.institution && <div className="field-err">⚠ {errors.institution}</div>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="grad">Graduation Year</label>
                        <div className="input-wrap">
                          <span className="input-icon-l"><IconAward /></span>
                          <input id="grad" type="number" className="form-input" placeholder="e.g. 2018"
                            min="1970" max="2025"
                            value={form.graduationYear} onChange={set('graduationYear')} />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="exp">Years of Experience <sup>*</sup></label>
                      <div className="input-wrap">
                        <span className="input-icon-l"><IconBriefcase /></span>
                        <select id="exp"
                          className={`form-select${errors.experience ? ' is-err' : form.experience ? ' is-ok' : ''}`}
                          value={form.experience} onChange={set('experience')}>
                          <option value="">Select experience range</option>
                          {EXPERIENCE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                        <span className="select-arrow"><IconChevron /></span>
                      </div>
                      {errors.experience && <div className="field-err">⚠ {errors.experience}</div>}
                    </div>

                    <div className="form-divider" />
                    <div className="form-section-title">Areas of Expertise</div>
                    <div className="form-group">
                      <label className="form-label">Select Your Expertise <sup>*</sup></label>
                      <div className="expertise-tags">
                        {EXPERTISE_AREAS.map(tag => (
                          <span key={tag}
                            className={`exp-tag${form.expertise.includes(tag) ? ' selected' : ''}`}
                            onClick={() => toggleExpertise(tag)}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      {errors.expertise && <div className="field-err" style={{ marginTop: '0.5rem' }}>⚠ {errors.expertise}</div>}
                    </div>

                    <div className="form-group" style={{ marginTop: '1rem' }}>
                      <label className="form-label">Upload Resume / CV</label>
                      {form.resume ? (
                        <div className="upload-preview">
                          <span>📄</span>
                          <span className="upload-preview__name">{form.resume.name}</span>
                          <button className="upload-preview__remove" onClick={() => setForm(p => ({ ...p, resume: null }))}>✕</button>
                        </div>
                      ) : (
                        <div className="upload-zone" onDragOver={e => { e.preventDefault(); setDrag('resume'); }}
                          onDragLeave={() => setDrag('')} onDrop={e => { e.preventDefault(); setDrag(''); const f = e.dataTransfer.files[0]; if (f) setForm(p => ({ ...p, resume: f })); }}>
                          <input ref={resumeRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFile('resume')} />
                          <div className="upload-zone__icon">📤</div>
                          <div className="upload-zone__text">Drag & drop or click to upload</div>
                          <div className="upload-zone__sub">PDF, DOC or DOCX</div>
                          <div className="upload-zone__hint">Max 5 MB</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ── STEP 2: TEACHING DETAILS ── */}
                {step === 2 && (
                  <div>
                    <div className="form-section-title">Teaching Details</div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="ct">Proposed Course Title <sup>*</sup></label>
                        <div className="input-wrap">
                          <span className="input-icon-l"><IconBook /></span>
                          <input id="ct" type="text" className={cls('courseTitle')}
                            placeholder="e.g. Complete Python Bootcamp"
                            value={form.courseTitle} onChange={set('courseTitle')} />
                        </div>
                        {errors.courseTitle && <div className="field-err">⚠ {errors.courseTitle}</div>}
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="cc">Course Category <sup>*</sup></label>
                        <div className="input-wrap">
                          <span className="input-icon-l"><IconBriefcase /></span>
                          <select id="cc"
                            className={`form-select${errors.courseCategory ? ' is-err' : form.courseCategory ? ' is-ok' : ''}`}
                            value={form.courseCategory} onChange={set('courseCategory')}>
                            <option value="">Select category</option>
                            {EXPERTISE_AREAS.map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                          <span className="select-arrow"><IconChevron /></span>
                        </div>
                        {errors.courseCategory && <div className="field-err">⚠ {errors.courseCategory}</div>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="bio">Instructor Bio <sup>*</sup></label>
                      <textarea id="bio" rows={5}
                        className={`form-textarea${errors.bio ? ' is-err' : form.bio.length > 80 ? ' is-ok' : ''}`}
                        placeholder="Tell students about your background, experience, and what makes you a great instructor…"
                        value={form.bio} onChange={set('bio')} />
                      <div className={`char-count${form.bio.length > 400 ? ' warn' : ''}`}>
                        {form.bio.length} / 500 characters
                      </div>
                      {errors.bio && <div className="field-err">⚠ {errors.bio}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="ts">Teaching Style / Approach <sup>*</sup></label>
                      <textarea id="ts" rows={3}
                        className={`form-textarea${errors.teachingStyle ? ' is-err' : form.teachingStyle ? ' is-ok' : ''}`}
                        placeholder="Describe your teaching approach — e.g. project-based, lecture-style, interactive Q&A…"
                        value={form.teachingStyle} onChange={set('teachingStyle')} />
                      {errors.teachingStyle && <div className="field-err">⚠ {errors.teachingStyle}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="li">LinkedIn Profile</label>
                      <div className="input-wrap">
                        <span className="input-icon-l"><IconLink /></span>
                        <input id="li" type="url" className="form-input"
                          placeholder="https://linkedin.com/in/yourname"
                          value={form.linkedin || ''} onChange={set('linkedin')} />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Upload Certificate (optional)</label>
                      {form.certFile ? (
                        <div className="upload-preview">
                          <span>📄</span>
                          <span className="upload-preview__name">{form.certFile.name}</span>
                          <button className="upload-preview__remove" onClick={() => setForm(p => ({ ...p, certFile: null }))}>✕</button>
                        </div>
                      ) : (
                        <div className="upload-zone">
                          <input ref={certRef} type="file" accept=".pdf,.jpg,.png" onChange={handleFile('certFile')} />
                          <div className="upload-zone__icon">🏆</div>
                          <div className="upload-zone__text">Upload a relevant certificate</div>
                          <div className="upload-zone__sub">PDF, JPG or PNG</div>
                          <div className="upload-zone__hint">Max 5 MB</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ── STEP 3: REVIEW ── */}
                {step === 3 && (
                  <div>
                    <div className="form-section-title">Review Your Application</div>

                    {/* Summary tiles */}
                    {[
                      {
                        label: 'Personal Info',
                        rows: [
                          ['Name', `${form.firstName} ${form.lastName}`],
                          ['Email', form.email],
                          ['Phone', form.phone],
                          form.website && ['Website', form.website],
                        ].filter(Boolean),
                        step: 0,
                      },
                      {
                        label: 'Qualifications',
                        rows: [
                          ['Qualification', form.qualification],
                          ['Institution', form.institution],
                          form.graduationYear && ['Graduated', form.graduationYear],
                          ['Experience', form.experience],
                          ['Expertise', form.expertise.join(', ') || '—'],
                        ].filter(Boolean),
                        step: 1,
                      },
                      {
                        label: 'Teaching Details',
                        rows: [
                          ['Course Title', form.courseTitle],
                          ['Category', form.courseCategory],
                          ['Bio', form.bio.slice(0, 80) + (form.bio.length > 80 ? '…' : '')],
                          ['Teaching Style', form.teachingStyle.slice(0, 60) + (form.teachingStyle.length > 60 ? '…' : '')],
                        ],
                        step: 2,
                      },
                    ].map(section => (
                      <div key={section.label} style={{
                        background: 'var(--bg)', border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)', padding: '1rem 1.25rem',
                        marginBottom: '0.85rem',
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--dark)' }}>{section.label}</span>
                          <button onClick={() => setStep(section.step)}
                            style={{ fontSize: '0.75rem', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                            Edit
                          </button>
                        </div>
                        {section.rows.map(([k, v]) => (
                          <div key={k} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
                            <span style={{ color: 'var(--text-muted)', minWidth: '110px', flexShrink: 0 }}>{k}</span>
                            <span style={{ color: 'var(--text)', fontWeight: 500 }}>{v}</span>
                          </div>
                        ))}
                      </div>
                    ))}

                    <div className="form-divider" />

                    <label className="form-check">
                      <input type="checkbox" checked={form.agreeTerms} onChange={set('agreeTerms')} />
                      I agree to Eduport's <a >Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                    </label>
                    {errors.agreeTerms && <div className="field-err" style={{ marginTop: '-0.6rem', marginBottom: '0.75rem' }}>⚠ {errors.agreeTerms}</div>}

                    <label className="form-check">
                      <input type="checkbox" checked={form.agreeQuality} onChange={set('agreeQuality')} />
                      I agree to uphold Eduport's <a href="#">Quality Standards</a> for instructors and course content.
                    </label>
                    {errors.agreeQuality && <div className="field-err" style={{ marginTop: '-0.6rem', marginBottom: '0.75rem' }}>⚠ {errors.agreeQuality}</div>}
                  </div>
                )}

                {/* NAV BUTTONS */}
                <div className="form-actions">
                  {step > 0 && (
                    <button className="btn-cancel" onClick={prev}>← Back</button>
                  )}
                  {step < 3 ? (
                    <button className="btn-submit" onClick={next}>
                      Next Step <IconArrow />
                    </button>
                  ) : (
                    <button className="btn-submit" onClick={handleSubmit} disabled={loading}>
                      {loading ? <><IconSpinner /> Submitting…</> : <>Submit Application <IconArrow /></>}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── SIDEBAR ── */}
        <aside className="ins-sidebar">

          {/* PERKS */}
          <div className="side-card">
            <div className="side-card__header">
              <div className="side-card__header-icon">⭐</div>
              <div className="side-card__title">Why teach on Eduport?</div>
            </div>
            <div className="side-card__body">
              <div className="perks-list">
                {PERKS.map(p => (
                  <div className="perk-item" key={p.title}>
                    <div className="perk-item__dot">{p.icon}</div>
                    <div>
                      <div className="perk-item__title">{p.title}</div>
                      <div className="perk-item__desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TIPS */}
          <div className="side-card">
            <div className="side-card__header">
              <div className="side-card__header-icon">💡</div>
              <div className="side-card__title">Application Tips</div>
            </div>
            <div className="side-card__body">
              <div className="tips-list">
                {TIPS.map(t => <div className="tip-item" key={t}>{t}</div>)}
              </div>
            </div>
          </div>

          {/* FEATURED INSTRUCTORS */}
          <div className="side-card">
            <div className="side-card__header">
              <div className="side-card__header-icon">👩‍🏫</div>
              <div className="side-card__title">Featured Instructors</div>
            </div>
            <div className="side-card__body">
              <div className="instructor-faces">
                {INSTRUCTORS.map(i => (
                  <div className="instructor-face" key={i.name}>
                    <img src={i.img} alt={i.name} className="instructor-face__img" />
                    <div>
                      <div className="instructor-face__name">{i.name}</div>
                      <div className="instructor-face__subject">{i.subject}</div>
                    </div>
                    <div className="instructor-face__students">👥 {i.students}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}
