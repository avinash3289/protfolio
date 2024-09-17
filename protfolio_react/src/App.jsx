
import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import About from "./Components/about/about";
import Services from "./Components/Services/service";
import Mywork from "./Components/mywork/mywork";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";


const App=()=>{
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Mywork/>
    <Contact/>
    <Footer/>
    </>
  )


}

export default App
