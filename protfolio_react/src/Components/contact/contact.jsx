import React from "react";
import './contact.css';
import theme from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
const Contact=()=>{

    return(
        <>
        <div id='contact' className="contact">
            <div className="contact-tittle">
                <h1>Get in Touch</h1>
                <img src={theme} alt="contact"/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk'</h1>
                    <p>I'm currently available to take on new projects so feel free to send me a message about anything that you want me to work on.You  can contact anytime... </p> 
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail"/><p>avinashboddu3@gmail.com</p>

                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="call"/><p>9494549471</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="LOCA"/><p>Nelloree</p>
                         </div>

                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your Name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder="Enter your Email" name="Email"/>
                    <label htmlFor="">Write your Message</label>
                    <textarea name="message" rows="8" placeholder="Enter Your Message"/>
                    <button type="button " className="contact-submit">Submit</button>
                </form>
            </div>

             
        </div>
        
        </>
    )
}

export default Contact;