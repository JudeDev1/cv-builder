import {useState} from 'react';
import PersonalInfo from './pages/PersonalInfo';
import EducationSection from './pages/EducationSection';
import ExperienceSection from './pages/ExperienceSection';
import Preview from './pages/Preview';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
  })

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className='app-container'>
      <div className='form-side'>
        <PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />

          <EducationSection
            education={education}
            setEducation={setEducation}
          />

          <ExperienceSection
            experience={experience}
            setExperience={setExperience}
          />

          <Preview 
            personalInfo={personalInfo}
            education={education}
            experience={setExperience}
          />
      </div>
    </div>
  )
}

export default App;
