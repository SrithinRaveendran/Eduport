import { useState } from 'react';

const MODULES = [
  {
    title: 'Introduction of Digital Marketing',
    count: 3,
    lessons: [
      { title: 'Introduction', time: '2m 10s' },
      { title: 'What is Digital Marketing', time: '15m 10s' },
      { title: 'Type of Digital Marketing', time: '18m 10s' },
    ],
  },
  {
    title: 'Customer Life cycle',
    count: 4,
    lessons: [
      { title: 'What is Digital Marketing', time: '11m 20s' },
      { title: '15 Tips for Writing Magnetic Headlines', time: '25m 20s' },
      { title: 'How to Write Like Your Customers Talk', time: '11m 30s' },
      { title: 'How to Flip Features Into Benefits', time: '35m 30s', premium: true },
    ],
  },
  {
    title: 'What is Search Engine Optimization (SEO)',
    count: 10,
    lessons: [
      { title: 'Introduction', time: '1m 10s' },
      { title: 'Overview of SEO', time: '11m 03s' },
      { title: 'How to SEO Optimise Your Homepage', time: '15m 00s' },
      { title: 'How to Write Title Tags Search Engines Love', time: '25m 30s' },
      { title: 'SEO Keyword Planning', time: '18m 10s' },
      { title: 'eCommerce SEO', time: '28m 10s' },
      { title: 'Internal and External Links', time: '45m 10s' },
      { title: 'Mobile SEO', time: '8m 10s' },
      { title: 'Off-page SEO', time: '18m 10s' },
      { title: 'Measuring SEO Effectiveness', time: '35m 10s' },
    ],
  },
  {
    title: 'Facebook ADS',
    count: 3,
    lessons: [
      { title: 'Introduction', time: '1m 20s' },
      { title: 'Creating Facebook Pages', time: '25m 20s' },
      { title: 'Facebook Page Custom URL', time: '11m 30s' },
    ],
  },
  {
    title: 'YouTube Marketing',
    count: 5,
    lessons: [
      { title: 'Video Flow', time: '25m 20s' },
      { title: 'Webmaster Tool', time: '15m 20s' },
      { title: 'Featured Contents on Channel', time: '32m 20s' },
      { title: 'Managing Comments', time: '20m 20s', premium: true },
      { title: 'Channel Analytics', time: '18m 20s', premium: true },
    ],
  },
  {
    title: 'Why SEO',
    count: 8,
    lessons: [
      { title: 'Understanding SEO', time: '20m 20s' },
      { title: 'On-Page SEO', time: '15m 20s' },
      { title: 'Local SEO', time: '16m 20s' },
      { title: 'Measuring SEO Effectiveness', time: '12m 20s' },
      { title: 'Keywords in Blog and Articles', time: '15m 20s', premium: true },
      { title: 'SEO Keyword Planning', time: '36m 12s', premium: true },
    ],
  },
  {
    title: 'Google tag manager',
    count: 4,
    lessons: [
      { title: 'G+ Pages Ranks Higher', time: '13m 20s' },
      { title: 'Adding Contact Links', time: '7m 20s' },
      { title: 'Google Hangouts', time: '12m 20s' },
      { title: 'Google Local Business', time: '7m 20s' },
    ],
  },
  {
    title: 'Integration with Website',
    count: 3,
    lessons: [
      { title: 'Creating LinkedIn Account', time: '13m 20s' },
      { title: 'Advance Searching', time: '31m 20s' },
      { title: 'LinkedIn Mobile App', time: '25m 20s' },
    ],
  },
];

export default function CourseCurriculum(data) {
  const [open, setOpen] = useState([0]);

  const toggle = i => setOpen(prev =>
    prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
  );


  // console.log(data.curriculumData,"props of curriculam data")
  const { curriculumData } = data
  console.log(curriculumData, "destructed data")

  return (
    <div className="curriculum-section">
      <h2 className="section-title">Course Curriculum</h2>
      {curriculumData && curriculumData.map((mod, i) => (
        <div className="curriculum-module" key={i}>
          <div className="curriculum-module__header" onClick={() => toggle(i)}>
            <div>
              <div className="curriculum-module__title">{mod.lessonTitle}</div>
              <div className="curriculum-module__meta">{mod.duration} Lectures</div>
            </div>
            <span className={`curriculum-module__chevron${open.includes(i) ? ' open' : ''}`}>▼</span>
          </div>
          {open.includes(i) && mod.topics.map((lesson, j) => (
            <div className="curriculum-lesson" key={j}>
              <div className="curriculum-lesson__left">
                <div className="curriculum-lesson__icon">▶</div>
                <span className="curriculum-lesson__title">{lesson.name}</span>
                
              </div>
              <div className="curriculum-lesson__right">
                {/* {lesson.premium && (
                  <span className="curriculum-lesson__badge">Premium</span>
                )} */}
                <span className="curriculum-lesson__time">{lesson.topicduration} min</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
