import React from 'react'

function ExperienceSection({experience, setExperience}) {
  return (
    <div>
      <form>
        <input
          type='text'
          value={experience.company}
          onChange={(e) => setExperience({...experience, company: e.target.value})}
        />
        <input 
          type='text'
          value={experience.position}
          onChange={(e) => setExperience({...experience, position: e.target.value})}
        />
        <input 
          type='text'
          value={experience.startDate}
          onChange={(e) => setExperience({...experience, startDate: e.target.value})}
        />
        <input 
          type='text'
          value={experience.endDate}
          onChange={(e) => setExperience({...experience, endDate: e.target.value})}
        />
      </form>
    </div>
  )
}

export default ExperienceSection;
