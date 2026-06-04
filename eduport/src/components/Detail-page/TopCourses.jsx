// const COURSES = [

//   {
//     img: 'https://stackbros.in/eduport/landing/assets/images/courses/4by3/17.jpg',
//     avatar: 'https://stackbros.in/eduport/landing/assets/images/avatar/09.jpg',
//     title: 'The Complete Digital Marketing Course - 12 Courses in 1',
//     category: 'Personal Development',
//     price: '$140',
//     students: '9.1k',
//     rating: '4.5',
//   },
//   {
//     img: 'https://stackbros.in/eduport/landing/assets/images/courses/4by3/18.jpg',
//     avatar: 'https://stackbros.in/eduport/landing/assets/images/avatar/07.jpg',
//     title: 'Fundamentals of Business Analysis',
//     category: 'Business Development',
//     price: '$160',
//     students: '2.5k',
//     rating: '3.6',
//   },
//   {
//     img: 'https://stackbros.in/eduport/landing/assets/images/courses/4by3/21.jpg',
//     avatar: 'https://stackbros.in/eduport/landing/assets/images/avatar/05.jpg',
//     title: 'Google Ads Training: Become a PPC Expert',
//     category: 'SEO',
//     price: '$226',
//     students: '6k',
//     rating: '3.8',
//   },
//   {
//     img: 'https://stackbros.in/eduport/landing/assets/images/courses/4by3/20.jpg',
//     avatar: 'https://stackbros.in/eduport/landing/assets/images/avatar/02.jpg',
//     title: 'Behavior, Psychology and Care Training',
//     category: 'Lifestyle',
//     price: '$342',
//     students: '15k',
//     rating: '4.8',
//   },
// ];


import { useNavigate } from "react-router-dom";
export default function TopCourses(props) {

  const {fullcourses} = props
  console.log(fullcourses,'from top course')
  const navi = useNavigate()

  const onCardClick=(id)=>{
    navi(`/Detail-page/${id}`)
    window.location.reload()
  }
  return (
    <section className="top-courses-section">
      <div className="top-courses-section__inner">
        <h2 className="top-courses-section__title">Top Listed Courses</h2>
        <div className="courses-grid">
          {fullcourses.map(c => (
            <div className="course-card" key={c.title} onClick={()=>onCardClick(c._id)} >
              <div className="course-card__img-wrap">
                <img src={c.image} alt={c.title} className="course-card__img" />
                <div className="course-card__bookmark">🔖</div>
              </div>
              <div className="course-card__body">
                <div className="course-card__stats">
                  {/* <span className="course-card__stat">👥 {c.students}</span>
                  <span className="course-card__stat">★ {c.rating}</span> */}
                </div>
                <hr className="course-card__divider" />
                <div className="course-card__meta">
                  {/* <img src={c.avatar} alt="" className="course-card__author" /> */}
                </div>
                <div className="course-card__title">{c.title}</div>
                <div className="course-card__category">{c.category}</div>
              </div>
              <div className="course-card__footer">
                <span className="course-card__price">{c.price}</span>
                <button className="btn btn-outline" style={{ padding: '0.3rem 0.85rem', fontSize: '0.8rem' }}>
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
