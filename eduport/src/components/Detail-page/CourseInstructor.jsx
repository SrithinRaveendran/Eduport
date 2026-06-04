export default function CourseInstructor() {
  return (
    <div className="section-block">
      <h2 className="section-title">About Instructor</h2>
      <div className="instructor-card">
        <img
          src="https://stackbros.in/eduport/landing/assets/images/instructor/01.jpg"
          alt="Louis Ferguson"
          className="instructor-card__image"
        />
        <div style={{ flex: 1 }}>
          <div className="instructor-card__name">Louis Ferguson</div>
          <div className="instructor-card__role">Instructor of Marketing</div>
          <div className="instructor-card__socials">
            {['𝕏', 'f', 'in', '▶', '📷'].map((s, i) => (
              <div className="social-btn" key={i}>{s}</div>
            ))}
          </div>
          <div className="instructor-card__stats">
            {[
              { value: '9.1k', label: 'Students' },
              { value: '4.5', label: 'Rating' },
              { value: '29', label: 'Courses' },
              { value: '205', label: 'Reviews' },
            ].map(s => (
              <div className="instructor-stat" key={s.label}>
                <div className="instructor-stat__value">{s.value}</div>
                <div className="instructor-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="instructor-card__bio">
            Fulfilled direction use continual set him propriety continued. Saw met applauded favorite
            deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther
            related bed and passage comfort civilly.
          </p>
          <p className="instructor-card__bio">
            As it so contrasted oh estimating instrument. Size like body someone had. Are conduct
            viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending
            her ask own. Praise effect wishes change way and any wanted.
          </p>
          <div className="instructor-contact">
            <div><span>Mail ID:</span><a href="#">hello@email.com</a></div>
            <div><span>Web:</span><a href="#">https://eduport.com</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
