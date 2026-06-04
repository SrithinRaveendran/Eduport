const TABS = ['Overview', 'Curriculum', 'Instructor', 'Reviews', 'FAQs', 'Comment'];

export default function CourseTabs({ active, onChange }) {
  return (
    <div className="course-tabs">
      <ul className="course-tabs__list">
        {TABS.map(tab => (
          <li
            key={tab}
            className={`course-tabs__item${active === tab ? ' active' : ''}`}
            onClick={() => onChange(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}
