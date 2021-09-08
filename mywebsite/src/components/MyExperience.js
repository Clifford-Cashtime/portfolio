import React from 'react';
import './MyExperience.css';
import { Link } from 'react-router-dom';
               
export default function MyExperience() {
    return (
        <div>
            <div className="section">
                <div className="container1">
                    <div className="heading">
                        <h1>Experience</h1>
                    </div>
                    <div className="contents-section">
                       
                        <div className="second-content">
                             <h2>BankSeta: Cyber-Security (Currently enrolled): This Internship offers the opportunity to gain 1 year’s work experience and International Certifications in CompTIA Cloud +, Security + and Ethical Hacking upon successful examination.</h2>
                            <h3>DURATION:  23 MARCH 2021 - 23 MARCH: 2022</h3>
                            <span>Job description:</span>
                             <ol>
                                <li>Developing, updating, and implementing security measures and controls.</li>
                                <li>Performing assessments of the IT security/risk posture within the IT network and systems.</li>
                                <li>Risks Assessments and Vulnerabilities assessment.</li>
                                <li>Secure digital files and information systems, protecting them from unauthorized access or tampering.</li>
                                <li>Provide technical support and monitor security access. · Perform regular internal and external security audits.</li>
                                <li>Monitor and analyze Intrusion Detection Systems (IDS), Intrusion Prevention Systems (IPS), and Security Information and Event Management (SIEM).</li>
                                <li>Create, modify, and update IDS, IPS, and SIEM rules. · Analyze the source of security breaches.</li>
                                <li>Recommend and implement security tools and anti-malware software.</li>
                                <li>Determine, adapt, and maintain corporate security procedures and policies.</li>
                                <li>Provide staff with security awareness training.</li>
                             </ol> 
                            <a href="https://www.bankseta.org.za/" className="button">Website</a>
                        </div>

                         <div className="first-content">
                            <h2>Phalaborwa foundation (Internship)</h2>
                            <h3>DURATION: JUNE - TO - JULY: 2019</h3>
                            <span>Job description:</span>
                             <ol>
                                <li>Build a desktop PC from various components.</li>
                                <li>Participated in rolling out multiple Multipoint-based e-learning computerlaboratories consisting of 60 workstations.</li>
                                <li>Part of the team that performed the following tasks:</li>
                                <ul>
                                    <li>Installation of Microsoft windows Serrver 2016 software andconfiguration of server.</li>
                                    <li>Update and configure thin-client firmware</li>
                                    <li>Update and configure server e-learning components</li>
                                    <li>Post-installation testing and troubleshooting</li>
                                </ul>
                                <li>Installation and configuration of digital signage related to internal marketing and information displays (these displays are networked on the IT infrastructure).</li>
                                <li>Design of content related to the digital marketing displays.</li>
                                <li>Capturing and interpreting data related to a Total Cost of Ownership analysis for a large IT contract.</li>
                                <li>Attended a IT operational planning meeting and a strategic IT Steering Committee meeting.</li>
                             </ol> 

                            <a href="https://pafound.org/" className="button">Website</a>
        
                        </div>
                    </div>
                    <div className="footerr-container">
                        <section className='social-media'>
                            <div className='social-media-wrap'>
                            <div className='footer-logo'>
                                <Link to='/' className='social-logo'>
                                CLIFFORD
                                <i className='fab fa-typo3' />
                                </Link>
                            </div>
                            <small className='website-rights'>CLIFFORD © 2021</small>
                            <div className='social-icons'>
                                <Link
                                className='social-icon-link facebook'
                                to={{pathname: "https://www.facebook.com/clifford.mongwe.5/"}}
                                target='_blank'
                                aria-label='Facebook'
                                >
                                <i className='fab fa-facebook-f' />
                                </Link>
                            
                                <Link
                                className='social-icon-link youtube'
                                to={{pathname: "https://github.com/Clifford-Cashtime/portfolio"}}
                                target='_blank'
                                aria-label='Youtube'
                                >
                                <i className='fab fa-github' />
                                </Link>
                                <Link
                                className='social-icon-link twitter'
                                to={{pathname: "https://www.twitter.com/CliffordChTm1?s=09/"}}
                                target='_blank'
                                aria-label='Twitter'
                                >
                                <i className='fab fa-twitter' />
                                </Link>
                                <Link
                                className='social-icon-link twitter'
                                to={{pathname: "https://www.Linkedin.com/in/clifford-mathebula-70790b1a6"}}
                                target='_blank'
                                aria-label='LinkedIn'
                                >
                                <i className='fab fa-linkedin' />
                                </Link>
                            </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
