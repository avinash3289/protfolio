import React from "react";
import './service.css';
import theme from "../../assets/theme_pattern.svg";
import servicedata from "../../assets/services_data";
import arrowicon from "../../assets/arrow_icon.svg";
function Services(){
    return (  
         <>

        <div id='services' className="services">
            <div className="service-tittle">
                <h1>My Services</h1>
                <img src={theme} alt='loggo'/>
            </div>
            <div className="service-data">
                {
                    servicedata.map((S,index)=>{
                        return <div className="service-format" key={index}>
                            <h3>{S.s_no}</h3>
                            <h2>{S.s_name}</h2>
                            <p>{S.s_desc}</p>
                            <div className="service-readmore">
                                <p>ReadMore...</p>
                                <img src={arrowicon} />
                            </div>


                        </div>
                    })
                }
           

            </div>

        </div>

     
        </>
    )
}

export default Services;