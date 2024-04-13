import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-reveal";

const Certification = () => {
    return (
        <Wrapper id='certification' >

            <div className='maxWidth'>


                <div className='center'>
                    <h2 className='heading'>Certification 👨‍🎓</h2>
                </div>

                <Fade bottom duration={1000} distance="20px">
                    <div className='flex2'>

                        <div className='div2'>
                            <p className='para'>I am proud to hold a certification in <b>Frontend Development</b>, demonstrating my proficiency in creating visually appealing and user-friendly web interfaces. Throughout this certification program, I have acquired a comprehensive skill set in <b>HTML, CSS, JavaScript, ReactJS, Redux and Git</b> the fundamental building blocks of web development.<br /><br />
                                Having successfully completed the Frontend Development Certification, I am equipped with the skills and knowledge necessary to contribute to the creation of dynamic and user-centric web applications. I am enthusiastic about applying my expertise to real-world projects and staying at the forefront of evolving web technologies.
                            </p>
                        </div>

                        <div className='div1'>
                            <img className="div1-img" src="./CodingNinjas-Certificate.png" alt="" />
                        </div>

                    </div>
                </Fade>

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;

    .center{
        padding-top:100px;
        padding-bottom:50px;
        display:flex;
    justify-content:center;
    align-items:center;
    }

    .heading{
        border-bottom: 5px solid #ff6e00;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
    padding-bottom: 10px;
    width: -webkit-max-content;
    width: max-content;
    text-align:center;
    }
    
    .para{
        color: gray;
        font-size: 20px;
        line-height:1.5;
    }

    .para2{
        color: gray;
        font-size: 10px;
        line-height:1.5;
    }

    img{
        width: 623px;
        height: 456px;
    }

    .flex2{
        display:flex;
        justify-content:center;
        align-items:center;
        gap: 7rem;
    }

    .div2{
        padding-right: 50px;
        width:50%;
    }

    .maxWidth{
        max-width:1340px;
    }

    @media only screen and (max-width:600px){

        .flex2{
          display: inline;
        }

        .heading{
            margin-bottom:0px;
        }
    
        .div1{
          width:auto;
          margin-left:20px;
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

        .para{
            font-size:20px;
            padding-left:20px;
            padding-right:20px;
        }

        img{
            width: 450px;
            height: 350px;
        }

    
      }
    


    `

export default Certification;