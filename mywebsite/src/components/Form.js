import emailjs from "emailjs-com";
import React from 'react';
import './Form.css';
import { toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_cashtime', 'template_9kxyhcr', e.target, 'user_PBd4g5G1Kwm6qgQGzUZse')
        .then((result) => {
            console.log("Message sent successfully", result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    toast.configure()

    const submit = (e) => {
        if (e.target.value >= 1) {
            toast.success("Message sent", { position: toast.POSITION.BOTTOM_RIGHT });
        }
        else {
            toast.error("Please fill out the missing entries", {position: toast.POSITION.BOTTOM_RIGHT})
        }
    }
    return (
        <div>
            <div className="container">
                {/*<video src='videos/video-2.mp4' autoPlay loop muted />*/}
                <form onSubmit={sendEmail}>
                    <div className="Heading">
                        <h2>Contact Me</h2>
                        <p>Email or phone me for more information </p>
                    </div>
                    <div className="container-section">
                        <div className="contact-list">
                            <i class="fa fa-map-marker 0.2em"> Limpopo, Phalaborwa</i>
                            <i class="fa fa-phone " > (+27) 78 500 7204 / 79 562 8093 </i>
                            <i class="fa fa-envelope abs 5em ">cliffordmathebula22@gmail.com</i>
                        </div>
                        <div >
                            <div className="name-input">
                                <input type="text" className="name" placeholder="Full Names" name="name" required/>
                            </div>
                            <div className="email-input" >
                                <input type="email" className="email-name" placeholder="Email Address" name="email" required/>
                            </div>
                            <div className="subject-input">
                                <input  type="text" className="Subject" placeholder="Subject" name="subject" required/>
                            </div>
                            <div className="text-area-input">
                                <textarea className="text-area" id="" cols="30" rows="8" placeholder="Your message" name="message"  required></textarea>
                            </div>
                            <div className="button-input">
                                <input onClick={submit} type="submit" className="button-send" value="Send Message"></input>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}