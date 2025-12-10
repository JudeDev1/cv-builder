import React from 'react'

function Education({education, setEducation}) {
  return (
    <div>
      <form>
        <input
          type='text'
          value={education.school}
          onChange={(e) => setEducation({...education, school: e.target.value})}
        />
        <input
          type='text'
          value={education.degree}
          onChange={(e) => setEducation({...education, degree: e.target.value})}
        />
        <input
          type='text'
          value={education.startDate}
          onChange={(e) => setEducation({...education, startDate: e.target.value})}
        />
        <input
          type='text'
          value={education.endDate}
          onChange={(e) => setEducation({...education, endDate: e.target.value})}
        />
      </form>
    </div>
  )
}

export default Education;
