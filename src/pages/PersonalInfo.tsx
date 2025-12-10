import React from 'react'

function PersonalInfo({personalInfo, setPersonalInfo}) {
  return (
    <div>
      <form>
        <input 
          type='text'
          value={personalInfo.name}
          onChange={(e) => setPersonalInfo({...PersonalInfo, name: e.target.value})}
        />
        <input 
          type='email'
          value={personalInfo.email}
          onChange={(e) => setPersonalInfo({...PersonalInfo, email: e.target.value})}
        />
        <input 
          type='text'
          value={personalInfo.phone}
          onChange={(e) => setPersonalInfo({...PersonalInfo, phone: e.target.value})}
        />
        <input 
          type='text'
          value={personalInfo.address}
          onChange={(e) => setPersonalInfo({...PersonalInfo, address: e.target.value})}
        />
      </form>
    </div>
  )
}

export default PersonalInfo;