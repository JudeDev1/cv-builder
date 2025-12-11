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
                {education.map((ed, index) => (
                    <div key={index}>
                        <p><strong>School:</strong>{ed.school}</p>
                        <p><strong>Degree:</strong>{ed.degree}</p>
                        <p><strong>Duration:</strong>{ed.startDate} - {ed.endDate}</p>
                    </div>
                ))}
            </section>
    
            <section>
                <h3>Experience Information</h3>
                {experience.map((exp, index) => (
                    <div key={index}>
                        <p><strong>Company:</strong> {exp.company}</p>
                        <p><strong>Position:</strong> {exp.position}</p>
                        <p><strong>Duration:</strong> {exp.startDate} - {exp.endDate}</p>
                    </div>
                ))}
            </section>
        </div>
    );
  }
  
  export default Preview;