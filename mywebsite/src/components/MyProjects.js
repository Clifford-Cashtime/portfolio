import React from 'react';
import './MyProjects.css';
import { Link } from 'react-router-dom';

               
export default function MyProjects() {
    return (
        <div>
            <section className="timeline-section">
                <h1><br></br><br></br>PROJECTS TO BE UPLOADED</h1>
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