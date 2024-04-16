import React from 'react'
import experience from "../experience.png"

const Body = () => {
    return (
        <div className='body'>
            <div className='about'>
                <h1> About</h1>
                <p1>Software engineer specialized in Dynamics 365 Business Central development. Proven expertise in AL, C/AL, APIs, and SQL for seamless system integration. Experienced in problem analysis and efficient solution implementation.
                    Contributed to international projects in the UK, France, and the Netherlands, excelling in technical report creation.
                    Eager to gain more professional experience, I aim to deepen my skills in C#, Java, and Python, enhancing my technical prowess in the ever-evolving programming landscape.</p1>
            </div>
            <div className='aboutImg' href="#"><img className="experience" src={experience} alt="experience..." />
            </div>

            <div className='experience'>
                <h2> Experience</h2>
                <p2> Title: Engenheiro de software <br /> Employment type: Full-time <br /> company name: myPartner  </p2>
            </div>
            <div className='experienceImg' href="#"><img className="experience" src={experience} alt="experience..." />
            </div>

            <div className='education'>
                <h2>Education</h2>
                <p3>Instituto Plitécnico da Guarda <br /> Engenharia Informática <br /> 2016-2021 </p3>
            </div>
            <div className='educationImg' href="#"><img className="experience" src={experience} alt="experience..." />
            </div>

            <div className='skills'>
                <h3>Skills</h3>
                <p1>C# <br /> AL <br /> C/AL <br />  Microsoft Dynamics 365 <br /> Microsoft Dynamics ERP <br /> SQL </p1>
            </div>
            <div className='skillsImg' href="#"><img className="experience" src={experience} alt="experience..." />
            </div>
        </div>
    )
}

export default Body
