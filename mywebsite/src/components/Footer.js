import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Feel free to contact me below for more information
        </p>
        <p className='footer-subscription-text'>
          About, Contact, Services, Social Media
        </p>
        {/*<div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>*/}
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About </h2>
            <Link to='/About'>About me</Link>
            <Link to='/Experience'>Experience</Link>
            <Link to='/Skills'>skills</Link>
            <Link to='/Education'>Education</Link>
            <Link to='/Achievement'>Achievements</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to={{pathname: "https://www.gmail.com/"}}  target='_blank'>Gmail</Link>
            <Link to='/'>Phone:</Link>
            <Link to='/'>(+27) 78 500 7204</Link>
            <Link to='/'>(+27) 79 562 8093</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'>Render services</Link>
            <Link to='/'>"///////"</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to= {{pathname: "https://www.facebook.com/clifford.mongwe.5/"}}  target='_blank'>Facebook</Link>
            <Link to={{pathname: "https://www.github.com/Clifford-Cashtime/portfolio"}}  target='_blank'>Github</Link>
            <Link to={{pathname: "https://www.twitter.com/CliffordChTm1?s=09/"}}  target='_blank'>Twitter</Link>
            <Link to={{pathname: "https://www.Linkedin.com/in/clifford-mathebula-70790b1a6"}}  target='_blank'>LinkedIn</Link>
          </div>
        </div>
      </div>
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
  );
}

export default Footer;