import { useEffect, useState } from 'react';
import './styles.css';
// import Navbar from './components/Navbar';
import HeroBanner from './HeroBanner';
import CourseTabs from './CourseTabs';
import CourseOverview from './CourseOverview';
import CourseCurriculum from './CourseCurriculum';
import CourseInstructor from './CourseInstructor';
import CourseReviews from './CourseReviews';
import CourseFAQs from './CourseFAQs';
import CourseComments from './CourseComments';
import CourseSidebar from './CourseSidebar';
import TopCourses from './TopCourses';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function DetailPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const { id } = useParams()

  const [curriculumData,setcurriculamData] = useState()
  const [overViewData,setOverViewData] = useState()
  const [singleDataApi,setSingleDataApi] = useState()

  const [fullcourses,setFullcourses] = useState([])

  const getsingleItem = async () => {
    try {
      const singleItem = await axios.get(`http://localhost:5000/course/${id}`)
      console.log(singleItem, 'data from api')
      console.log(singleItem.data.curriculum,"curriculam data only");
      console.log(singleItem.data.whatYouWillLearn,"what you will learn")

      setcurriculamData(singleItem.data.curriculum) // setting the curriculam data to state
      setOverViewData(singleItem.data.whatYouWillLearn) //setting overview (what you will learn)  to state
      setSingleDataApi(singleItem.data) // the whole data from the apicall (singleData)
      console.log(singleItem.data,"single item data")


    }
    catch  {
      console.log("something went wrong while retriveing data")
    }
  }

 

  const getAllcourse = async ()=>{
    try{
      console.log("API called");
    const allcourses = await axios.get("http://localhost:5000/course")
    const data = allcourses.data
    setFullcourses(data)
    console.log(data,"data from detailpage full courses")
    }
    catch(e){
     console.log(e.message,"something went wrong while fetching from detail page")
    }
  }
 useEffect(() => {
    getsingleItem(),
    getAllcourse()
  }, []);
  
  const filteredcourse = fullcourses && fullcourses.filter(each=> each._id !== singleDataApi._id)
  const randomItem = filteredcourse[Math.floor(Math.random() * filteredcourse.length) ]

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview': return <><CourseOverview singleDataApi={singleDataApi} /><CourseCurriculum curriculumData = {curriculumData}/></>;
      case 'Curriculum': return <CourseCurriculum curriculumData = {curriculumData}/>;
      case 'Instructor': return <CourseInstructor />;
      case 'Reviews': return <CourseReviews />;
      case 'FAQs': return <CourseFAQs />;
      case 'Comment': return <CourseComments />;
      default: return <CourseOverview />;
    }
  };
  console.log(id, 'id of the current course')

  // const sample = useSelector((state) => state.test)
  // console.log(sample)

console.log(fullcourses,"fullcourse")

  return (
    <div>
      {/* <Navbar /> */}
      <HeroBanner data = {singleDataApi}/>
      <CourseTabs active={activeTab} onChange={setActiveTab} />

      <div className="course-layout">
        <main>
          {renderContent()}

          {/* Promo Banner */}
          <div className="promo-banner">
            <div>
              <div className="promo-banner__title">Get Premium Course in $800</div>
              <p className="promo-banner__desc">
                Prosperous understood Middletons in conviction an uncommonly do. Supposing so be
                resolving breakfast am or perfectly.
              </p>
              <div className="promo-banner__features">
                {['High quality Curriculum', 'Tuition Assistance', 'Diploma course', 'Intermediate courses', 'Over 200 online courses'].map(f => (
                  <div className="promo-feature" key={f}>{f}</div>
                ))}
              </div>
            </div>
            <button className="btn btn-secondary btn-lg">Purchase premium</button>
          </div>
        </main>

        <CourseSidebar data = {randomItem}/>
      </div>

      <TopCourses fullcourses = {fullcourses} />
      <Footer />
    </div>
  );
}
