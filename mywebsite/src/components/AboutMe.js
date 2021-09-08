import React from 'react';
import './AboutMe.css';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';

export default function AboutMe() {
    const pdfGenerate = () => {
        const Doc = new jsPDF()
        Doc.save('Resume.pdf')
    }
    return (
        <div>
            <div className="section">
                <div className="title">
                    <h1>About Me</h1>
                </div>
                {/*<video src='videos/video-2.mp4' autoPlay loop muted />*/}
                <div className="container">
                    <div className="content-section">
                        <div className="content">
                            <h3>A Short Description of Clifford</h3>
                            <p>As a highly motivated and dedicated person with strong interpersonal and communication skills, I have been extensively involved in several events and programs, which have allowed me to develop a strong interpersonal skill. My involvement in various events, including choir and sports enhanced me to work closely with my peers while supporting the community as a whole. These experiences have positively improved my time management and strong organizational skills. 
                                .</p>
                            <h4>My Personal Attributes:</h4>
                            <p><span>MOTIVATION:</span>Volunteer in participation and school results demonstrates a higher motivation.</p>
                            <p><span>COMMUNICATION:</span>Singing in a choir in high school and church allowed me to develop and improve my communication skills.</p>
                            <p><span>IT ASSISTENT:</span>Being an IT Assistant at phalaborwa foundation has given me exposure to the
                                workplace.
                            </p>
                            <p><span>BANKSETA:</span>I am curreclty hosted by Nedbank as a RBB Cyber Risk Specialist under BankSeta Learnership.
                            </p>
                            <p>Download my CV Below:</p>
                        </div>
                        <div className="button">
                            <a href='files/ResumeCV.pdf' onClick={pdfGenerate} download>Resume (pdf)</a>
                        </div>
                        <div className="social">
                            <a href="https://www.facebook.com/clifford.mongwe.5/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/CliffordChTm1?s=09/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.Linkedin.com/in/clifford-mathebula-70790b1a6"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    
                    <div className="image-section">
                        <img src='images/ME-IMG.jpg' alt=""/>
                    </div>
                </div>
                
            </div>          
        </div>
        
    )
}
