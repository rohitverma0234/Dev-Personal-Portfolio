import About from "./Components/About";
import Certification from "./Components/Certification";
import Experience from "./Components/Experience/Experience";
import HeroSection from "./Components/HeroSection/HeroSection";
import Project from "./Components/Projects/Project";
// import Heading from "./Components/Resume/Heading";
import Skills from "./Components/Skills/Skills";
import Whatido from "./Components/WhatIDo/Whatido";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ThemeProvider } from "styled-components";




function App() {

  const theme={
    colors:{
      bg:"#f9f5ef",
      black: "#212529",
      helper: "#8490ff",
    },
    media:{
      mobile:"768px",
      tab:"998px",
    }
  }

  return (
    
    <ThemeProvider theme={theme}>
    <Header/>
    <HeroSection/>
    <About/>
    <Whatido/>
    <Skills/>
    <Certification/>
    <Experience/> 
    <Project/>
    <Footer/>
    </ThemeProvider>
    
  );
}

export default App;
