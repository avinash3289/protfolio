import React from "react";
import './mywork.css';
import theme from "../../assets/theme_pattern.svg";
import mywork from "../../assets/mywork_data";
import arrow from "../../assets/arrow_icon.svg";
const Mywork=()=>{
    return(
        <>
       <div  id='work' className="mywork">
        <div className="mywork-tittle">
            <h1>My Latest Work</h1>
            <img src={theme} alt="theme"  />
        </div>
        <div className="mywork-data">
            {
                mywork.map((W,index)=>{
                    return <img key={index} src={W.w_img} alt="" />

                })
            }

        </div>
        <div className="mywork-more">
            <p>Show More</p>
            <img src={arrow} alt="arrow" />
        </div>

       </div>
       </>
    )
}

export default Mywork;