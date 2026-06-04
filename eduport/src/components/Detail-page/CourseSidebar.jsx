import { useNavigate } from "react-router-dom";

export default function CourseSidebar(props) {
  const {data} = props

  const date = new Date()
  date.setDate(date.getDate() + 5);
  const formattedDate = date.toLocaleDateString();

  const navigate = useNavigate()

  const onAdclick=(id)=>{
    navigate(`/Detail-page/${id}`)
    window.location.reload()
  }
  return (
    <aside>
      <div className="sidebar-card" onClick={()=>onAdclick(data._id)}>
        <div className="sidebar-preview">
          <img
            src={data && data.image}
            alt="course preview"
          />
          <div className="sidebar-preview__play">
            <div className="play-btn">▶</div>
          </div>
        </div>

        <div className="sidebar-pricing">
          <p>{data && data.title} </p> 
          <div className="sidebar-price">
            
            <span className="sidebar-price__main">₹{data && data.price}</span>
            {/* <span className="sidebar-price__old">$350</span> */}
            <span className="sidebar-price__badge">60% off</span>
          </div>
          <div className="sidebar-timeleft">⏰ 5 days left at this price</div>

          <div className="sidebar-actions">
            <button className="btn btn-outline btn-lg btn-full">Free trial</button>
            <button className="btn btn-primary btn-lg btn-full">Buy course</button>
          </div>

          <div className="sidebar-share">
            <span>Share:</span>
            {['𝕏', 'f', 'in', '🔗'].map((icon, i) => (
              <div className="share-icon" key={i}>{icon}</div>
            ))}
          </div>
        </div>

        <div className="sidebar-includes">
          <div className="sidebar-includes__title">This course includes</div>
          {[
            { icon: '📚', label: 'Lectures', value: data && data.lessons },
            { icon: '⏱️', label: 'Duration', value: data && data.duration },
            { icon: '🎯', label: 'Skills', value: 'Beginner' },
            { icon: '🌐', label: 'Language', value: 'English' },
            { icon: '📅', label: 'Deadline', value: formattedDate },
            { icon: '🏆', label: 'Certificate', value: 'Yes' },
          ].map(item => (
            <div className="include-item" key={item.label}>
              <span className="include-item__label">
                <span className="include-item__icon">{item.icon}</span>
                {item.label}
              </span>
              <span className="include-item__value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '1.25rem' }}>
        <div className="sidebar-widget">
          <div className="sidebar-widget__title">Recently Viewed</div>
          {[
            {
              img: 'https://stackbros.in/eduport/landing/assets/images/courses/4by3/21.jpg',
              title: 'Fundamentals of Business Analysis',
              price: '$130',
              rating: '4.5',
            },
            {
              img: 'https://stackbros.in/eduport/landing/assets/images/courses/4by3/18.jpg',
              title: 'The Complete Video Production Bootcamp',
              price: '$150',
              rating: '4.0',
            },
          ].map(c => (
            <div className="recent-course" key={c.title}>
              <img src={c.img} alt={c.title} className="recent-course__img" />
              <div>
                <div className="recent-course__title">{c.title}</div>
                <div className="recent-course__meta">
                  <span className="recent-course__price">{c.price}</span>
                  <span className="recent-course__rating">★</span>
                  <span style={{ fontSize: '0.75rem', color: '#718096' }}>{c.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar-widget">
          <div className="sidebar-widget__title">Popular Tags</div>
          <div className="tags">
            {['blog', 'business', 'theme', 'bootstrap', 'data science', 'web development', 'tips', 'machine learning'].map(tag => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
