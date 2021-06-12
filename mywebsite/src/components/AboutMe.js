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
                            <h3>A short description of Clifford</h3>
                            <p>I am recent graduate in BSc Information Technology at the university of North-West (Potchefstroom Campus).
                            I am a very hard-working person and I am excited to get started in the role I believe I will enjoy. 
                            And I am a determined person who really wants to make an impact in my first job.
                            I am a well-focused person in everything that I do, and I never give up. 
                            I am also someone who you can rely on and I am able to work under pressure.
                            Am also someone who is able to deal with different people and make friends easily.</p>
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
