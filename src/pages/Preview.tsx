import React from 'react'

function Preview({ personalInfo, education, experience }) {
    return (
        <div className="preview">
            <h2>CV Preview</h2>
            <section>
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> {personalInfo.name}</p>
                <p><strong>Email:</strong> {personalInfo.email}</p>
                <p><strong>Phone:</strong> {personalInfo.phone}</p>
                <p><strong>Address:</strong> {personalInfo.address}</p>
            </section>

            <section>
                <h3>Education Information</h3>
                <p><strong>School:</strong> {education.school}</p>
                <p><strong>Degree:</strong> {education.degree}</p>
                <p><strong>Duration:</strong> {education.startDate} - {education.endDate}</p>
            </section>
    
            <section>
                <h3>Experience Information</h3>
                <p><strong>Company:</strong> {experience.company}</p>
                <p><strong>Position:</strong> {experience.position}</p>
                <p><strong>Duration:</strong> {experience.startDate} - {experience.endDate}</p>
            </section>
        </div>
    );
  }
  
  export default Preview;