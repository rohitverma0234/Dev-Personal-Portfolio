import React from 'react'
import styled from 'styled-components'
import {Fade} from "react-reveal";


const About = () => {
    return (
        <Wrapper id='about' >

            <Fade left duration={2000}>
                <div className='maxWidth'>

                    <div className='flex2'>

                        <div className='div1'>
                            <img className="div1-img" src="./IMG-20220122-WA0006.jpg" alt="" />
                        </div>

                        <div className='div2'>
                            {/* 👩 */}
                            <h2 className='heading'>About Me 😃</h2>

                            <p className='para'>I am a <b>Software Engineer (Frontend UI Developer)</b>, Graduate from Chandigarh Group of Colleges, Landran, Punjab. I have 2 years of experience as a Frontend Weveloper with proficiency in web technologies like <b>HTML5, CSS3, JavaScript, React, Redux, Wordpress</b> building large-scale web applications, cross-browser platforms, and design constraints on the web, and building responsive user interfaces.<br /><br />

                                ✨ <b>Languages</b>: React, Redux, JavaScript<br />

                                ✨ <b>Web technology</b> : HTML5, CSS3, SASS<br />

                                ✨ Bootstrap4, Material UI</p>

                        </div>
                    </div>

                </div>
            </Fade>

        </Wrapper>
    )
}

const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;

    .heading{
        border-bottom: 5px solid #ff6e00;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
    padding-bottom: 10px;
    width: -webkit-max-content;
    width: max-content;
    }
    
    .para{
        color: gray;
        font-size: 20px;
        margin-top: 40px;
        line-height:1.5;
    }

    img{
        width: 100%;
    }

    .flex2{
        display:flex;
        justify-content:center;
        align-items:center;
        gap: 7rem;
    }

    .div2{
        padding-top:50px;
        padding-right: 50px;
        width:50%;
    }

    .div1-img{
        width: 470px;
        border-radius: 50%;
        height: 573px;
    }

    .maxWidth{
        max-width:1340px;
    }

    @media only screen and (max-width:600px){

        .flex2{
          display: inline;
        }
    
        .div1{
          width:auto;
          padding-left:20px;
          padding-top:40px;
        }
    
        .btn{
          font-size:18px;
        }
    
        .btn-div{
          display:flex;
          justify-content:center;
        }

        .div2{
            padding-right: 20px;
            width:auto;
            padding-left:20px;
        }

        .div1-img{
            ${'' /* width: 394px;
            border-radius: 50%;
            height: 499px; */}

            width: 340px;
border-radius: 50%;
height: 449px;
        }
    
      }
    


    `

export default About