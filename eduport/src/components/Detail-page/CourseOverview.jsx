const LEARN_ITEMS = [
  'Digital marketing course introduction',
  'Customer Life cycle',
  'What is Search engine optimization (SEO)',
  'Facebook ADS',
  'Facebook Messenger Chatbot',
  'Search engine optimization tools',
  'Why SEO',
  'URL Structure',
  'Featured Snippet',
  'SEO tips and tricks',
  'Google tag manager',
];

export default function CourseOverview(data) {

  // const {overViewData} = data
  // console.log(overViewData,"overview data")
  // console.log(data,"overview data")
  const {singleDataApi} = data
  console.log(singleDataApi,"singledatafromapi")
  return (
    <div>
      <div className="section-block">
        <h2 className="section-title">Course Description</h2>
       
        {singleDataApi && singleDataApi.description.map(each=>(
          <p>{each}</p>
        ))}
       
      </div>

      <div className="section-block">
        <h2 className="section-title">What you'll learn</h2>
        <div className="learn-grid">
          {singleDataApi && singleDataApi.whatYouWillLearn.map(item => (
            <div className="learn-item" key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
