export default function HeroBanner(props) {
  const {data} = props
  
  console.log(data,'data from herobanner')
  return (
    <div className="hero-banner">
      <div className="hero-banner__container">
        <div className="hero-banner__breadcrumb">
          <a href="#">Home</a>
          <span>›</span>
          <a href="#">Courses</a>
          <span>›</span>
          <span>Course Detail</span>
        </div>

        <div className="hero-banner__tag">{data &&data.category}</div>

        <h1 className="hero-banner__title">
          {data && data.title}
          {/* The Complete Digital Marketing Course — 12 Courses in 1 */}
        </h1>

        <p className="hero-banner__desc">
          Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private
          blushes removed an in equally totally if. Delivered dejection necessary objection do Mr
          prevailed.
        </p>

        <div className="hero-banner__meta">
          <div className="hero-banner__meta-item hero-banner__rating">
            <div className="stars">{'★★★★½'}</div>
            <span className="rating-value">4.5/5.0</span>
          </div>
          <div className="hero-banner__meta-item">
            <span className="icon">👥</span>
            12k Enrolled
          </div>
          <div className="hero-banner__meta-item">
            <span className="icon">🎯</span>
            All levels
          </div>
          <div className="hero-banner__meta-item">
            <span className="icon">📅</span>
            Last updated 09/2021
          </div>
          <div className="hero-banner__meta-item">
            <span className="icon">🌐</span>
            English
          </div>
        </div>
      </div>
    </div>
  );
}
