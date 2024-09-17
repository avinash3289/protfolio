import React from "react";
import './footer.css';
import footerlogo from "../../assets/footer_logo.svg";
import usericon from "../../assets/user_icon.svg";
const Footer=()=>{

    return(
        <>
        <div id='footer' className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footerlogo} alt="footerimgae"/>
                    <p>I am a front developer  from India with 10years of Experience in web development</p>
                 
                </div>
              
                <div className="footer-top-right">
                    <div className="footer-email-input">
                    <img src={usericon} alt="user"/>
                    <input type="text" placeholder="Enter Your Mail"/>
                    </div> 
                    <div className="footer-subscribe">Subscribe</div>
                </div>
                 

            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2024 Avinash Boddu. All rights reserved...</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default Footer;