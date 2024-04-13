import React from 'react';
import styled from "styled-components";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Fade } from "react-reveal";
import TxtRotate from './TxtRotate';


const HeroSection = () => {

  return (
    <Wrapper id='home'>
      <Fade bottom duration={1000} distance="40px">
        <div className='flex'>

          <div className='div1'>
            <h2 className='heading'>Hi, I'm Rohit<span class="wave">👋</span></h2>


            <h3 className='typing'>
              <span class="txt-rotate" data-period="1000">I am a{' '}
                <TxtRotate
                  toRotate={["React Developer", "Frontend Enthusiast", "UI Designer", "WordPress Designer", "Dedicated Programmer", "Team Person", "Open Source Contributor"]}
                  period={2000}
                />
              </span>
            </h3>


            <p className='para'>A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</p>

            <div className='btn-div'>
              <a href="https://github.com/rohitverma0234"><button className='btn'><AiFillGithub className='svg' /> View on Github</button></a>
              <a href="https://www.linkedin.com/in/rohitverma0234/"><button className='btn'><AiOutlineLinkedin className='svg' /> View on LinkedIn</button></a>
            </div>
          </div>


          <div className='div2'>
            <img src="./hero-section-img.png" alt="" />
          </div>

        </div>
      </Fade>

    </Wrapper>
  )
}



const Wrapper = styled.section`
  padding-top:100px;
  padding-bottom:100px;

.wave {
    animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s;        /* Change to speed up or slow down */
    animation-iteration-count: infinite;  /* Never stop waving :) */
    transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
    display: inline-block;
  }
  
  
  @keyframes wave-animation {
      0% { transform: rotate( 0.0deg) }
     10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
     20% { transform: rotate(-8.0deg) }
     30% { transform: rotate(14.0deg) }
     40% { transform: rotate(-4.0deg) }
     50% { transform: rotate(10.0deg) }
     60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
    100% { transform: rotate( 0.0deg) }
  }

  .heading{
    font-size: 50px;
    font-weight: bolder;
  }

  .typing{
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  .para{
    color: gray;
    font-size: x-large;
    line-height: 1.5;
    margin-top: 40px;
  }

  .div1{
    width:50%;
    padding-left:100px;
  }

  .flex{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .btn{
    margin-right: 20px;
    margin-top: 30px;
    background-color: #ff6e00;
    border-color: #ff6e00;
    color:white;
    cursor: pointer;
    border-radius: 0.3rem;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    font-weight: 400;
    line-height: 1.5;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .btn-div{
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .svg{
    margin-bottom: -3px;
  }


  @media only screen and (max-width:600px){
    .flex{
      display: flex;
      flex-direction: column-reverse;
    }

    .div1{
      width:auto;
      padding-left:20px;
      padding-top:40px;
    }

    .btn{
      font-size:18px;
    justify-content: center;
    align-items: center;
    }

    .btn-div{
      display:flex;
      justify-content:left;
    }

    .div2 img{
      width:100%;
    }

  }




  
  `


export default HeroSection