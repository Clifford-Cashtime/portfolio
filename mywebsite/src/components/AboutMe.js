import React, { Component } from 'react';
import './AboutMe.css';
import jsPDF from 'jspdf'

export default function AboutMe() {
    const pdfGenerate = () => {
        const Doc = new jsPDF()
        Doc.save('Resume.pdf')
    }
    return (
        <div>
            <div className="section">
                {/*<video src='videos/video-2.mp4' autoPlay loop muted />*/}
                <div className="container">
                    <div className="content-section">
                        <div className="title">
                            <h1>About Me</h1>
                        </div>
                        <div className="content">
                            <h3>A Short Description of Clifford</h3>
                            <p>As a highly motivated and dedicated person with strong interpersonal and communication skills,
                            I have been extensively involved in my former school community, which has allowed me to develop strong
                            interpersonal skills. My involvement in various events, including choir and sports, has allowed me to
                            work closely with my peers while supporting the school community as a whole.
                            These experiences have allowed me to develop strong time management and organisational skills.
                                .</p>
                            <h4>My Personal Attributes:</h4>
                            <p><span>MOTIVATION:</span>Volunteer participation and school results demonstrate high motivation.</p>
                            <p><span>COMMUNICATION:</span>Singing a choir at school has allowed the development of my communication skills.</p>
                            <p><span>IT ASSISTENT:</span>Being an IT Assistant at phalaborwa foundation has given me exposure to the
                                workplace.
                            </p>
                            <p>Download my CV Below:</p>
                        </div>
                        <div className="button">
                            <a href='files/Resume.pdf' onClick={pdfGenerate} download>Resume (pdt)</a>
                        </div>
                        <div className="social">
                            <a href="https://www.facebook.com/clifford.mongwe.5/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/CliffordChTm1?s=09/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.Linkedin.com/in/clifford-mathebula-70790b1a6"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    
                    <div className="image-section">
                        <img src='images/IMG-ME.jpg' alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
