import React from 'react';
import './MyArchieve.css';
import { Link } from 'react-router-dom';
               
export default function MyArchieve() {
    return (
        <div>
           <section class="timeline-section">
                <div className="Title">
                    <h1>My Archievements Timeline</h1>
                </div>
                <div class="timeline-items">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2016</div>
                        <div class="timeline-content">
                            <h3>Phalaborwa Foundation: Learner support programme (Protec)</h3>
                            <p>Obtained: Leadership Training Course Certificate</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2017</div>
                        <div class="timeline-content">
                            <h3>Phalaborwa Foundation: Learner support programme (Protec)</h3>
                            <p>Obtained: Top 10 Physical Science Certificate</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2017 </div>
                        <div class="timeline-content">
                            <h3>Majeje High (Metrix)</h3>
                            <p>Obtained: Bachelor's Degree Certificate</p><br></br>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2021</div>
                        <div class="timeline-content">
                            <h3>ALTRON [BankSeta Programme]</h3>
                            <p>Appointed a Learder in one of the interns groups </p><br></br>
                            <p>Obtained: EC-Cousil CEH Certificate</p><br></br>
                            <p>Obtained: CompTia Security+ Certificate</p><br></br>
                            <p>Attempted: CompTia Cloud+ Certificate</p><br></br>
                        </div>
                    </div>
                </div>
            </section>
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
    )
}