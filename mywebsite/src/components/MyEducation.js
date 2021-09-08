import React from 'react';
import './MyEducation.css';
import { Link } from 'react-router-dom';

               
export default function MyEducation() {
    return (
        <div>
            <section class="timeline-section">
                <div className="Title">
                    <h1>My Educational Timeline</h1>
                </div>
                <div class="timeline-items">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2005 - 2007</div>
                        <div class="timeline-content">
                            <h3>Phulani-Byihola Primary School</h3>
                            <p>Attended from grade R -to- grade 2.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2008 - 2010</div>
                        <div class="timeline-content">
                            <h3>Chuchekani Primary School</h3>
                            <p>Attended from grade 3 -to- grade 5. </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2011 - 2012</div>
                        <div class="timeline-content">
                            <h3>Ninakhulu Primary School</h3>
                            <p>Attended from grade 6 -to- grade 7 (Obtained position 3 among top-10 of best learners in Mathematics in both grades).</p><br></br>
                            <p>Participated in Football Sport.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2013 - 2017</div>
                        <div class="timeline-content">
                            <h3>Majeje High</h3>
                            <p>Attended from grade 8 -to- grade 12 (Was among the top-10 of best learners in Mathematics).</p><br></br>
                            <p>Was part of the school choir which severally qualified to provitional level competitions and brought greate Gold and Silver Trophes.</p><br></br>
                            <p>Metriculated in 2017 with Bachelor's Degree.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2018 - 2020</div>
                        <div class="timeline-content">
                            <h3>North-West University (Potchefstroom Campus)</h3>
                            <p>Enrolled in (Bsc. Information Technology) at North-West University (Potchefstroom) and completed with the average of between 65% - 70%.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2021 - 2022</div>
                        <div class="timeline-content">
                            <h3>BankSeta: Cyber-Security Leanership</h3>
                            <p>I'm currently enrolled in this internship which offers the opportunity to gain 1 year’s work experience and International Certifications in CompTIA Cloud +, Security + and Ethical Hacking upon successful examination.</p><br></br>
                            <p>I'm Hosted by Nedbank for practical work experience.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">first-quarter of 2022</div>
                        <div class="timeline-content">
                            <h3>My First Job</h3>
                            <p>I'm hoping to get a permanent position towards the end of first-quarter of 2022.</p>
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
