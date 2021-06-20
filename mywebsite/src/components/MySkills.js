import React from 'react';
import './MySkills.css';
import './skillsCards.css';

               
export default function MySkills() {
    return (
        <div>
            <div className="title">
                <h1>My Skills</h1>
            </div>
            <section className="sectionss">
                <div className="container_sec">
                    <div className="first_container">
                        <div className="technical_skills">
                            <h2>Technical Skills</h2>
                            <li><h3>python</h3>
                                <span className="bar">70%<span className="python"></span></span>
                            </li>
                            <li>
                                <h3>java</h3>
                                <span className="bar">66%<span className="java"></span></span>
                            </li>
                            <li>
                                <h3>html</h3>
                                <span className="bar">85%<span className="html"></span></span>
                            </li>
                            <li>
                                <h3>css</h3>
                                <span className="bar">70%<span className="css"></span></span>
                            </li>
                            <li>
                                <h3>ejs</h3>
                                <span className="bar">60%<span className="ejs"></span></span>
                            </li>
                            <li>
                                <h3>javascripts</h3>
                                <span className="bar">70%<span className="javascripts"></span></span>
                            </li>
                            <li>
                                <h3>nodejs</h3>
                                <span className="bar">65%<span className="nodejs"></span></span>
                            </li>
                            <li>
                                <h3>react</h3>
                                <span className="bar">72%<span className="react"></span></span>
                            </li>
                            <li>
                                <h3>C#</h3>
                                <span className="bar">70%<span className="C"></span></span>
                            </li>
                            <li>
                                <h3>C++</h3>
                                <span className="bar">64%<span className="Cplus"></span></span>
                            </li>
                        </div>
                    </div>

                    <div className="second_container">
                        <div className="professional_skills">
                            <h2>Professional Skills</h2>
                            <li><h3>Communication Skills</h3>
                                <span className="bar">90%<span className="communication"></span></span>
                            </li>
                            <li>
                                <h3>Time Management</h3>
                                <span className="bar">85%<span className="management"></span></span>
                            </li>
                            <li>
                                <h3>Team Work</h3>
                                <span className="bar">85%<span className="team"></span></span>
                            </li>
                            <li>
                                <h3>Creativity</h3>
                                <span className="bar">70%<span className="creativity"></span></span>
                            </li>

                        </div>
                        <div className="other_skills">
                            <h4>Other Personal Skills</h4>
                            <ul className="other_flex">
                                <div className="f3">
                                    <li>MS-office</li>
                                    <li>MongoDB</li>
                                    <li>SQL</li>
                                </div>

                                <div className="S3">
                                    <li>Heroku</li>
                                    <li>Azure</li>
                                    <li>AWS</li>  
                                </div>                                 
                            </ul>
                        </div>

                         <div className="leadership_skills">
                            <h5>Proven Leadership Skills As Manifestet In:</h5>
                            <ul className="leader">
                                <li>Organizational skills: breaking my work load down in achievable sections.</li>
                                <li>My leadership skills as proven through the election as leader at Bank Seta.</li>
                                <li>My education from north west university.</li>
                                <li>My leadership training course certificate.</li>
                                <li>My skills from Bank Seta.</li>
                                <li>My honesty and Intergrity.</li>                               
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}