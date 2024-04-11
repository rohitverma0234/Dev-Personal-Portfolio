import { useEffect, useState } from "react";
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
import SplashScreen from "./containers/splashScreen/SplashScreen";
import {splashScreen} from "../src/Portfolio";


function App() {

  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);


  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);



  const theme = {
    colors: {
      bg: "#f9f5ef",
      black: "#212529",
      helper: "#212529",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    }
  }

  return (

    <div>
      <ThemeProvider theme={theme}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen/>
        ) : (
          <>
            <Header />
            <HeroSection />
            <About />
            <Whatido />
            <Skills />
            <Certification />
            <Experience />
            <Project />
            <Footer />
          </>
        )}
      </ThemeProvider>
    </div>

  );
}

export default App;
