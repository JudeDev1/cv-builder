import { useState } from 'react';
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
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className="flex gap-6 p-6 bg-cyan-100 min-h-screen">
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md space-y-6">
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
      </div>

      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md overflow-y-auto">
        <Preview 
          personalInfo={personalInfo}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;
