import React from 'react'
import styled from "styled-components";
import Data from './Data';
import SkillsSection from './SkillsSection';
import {Fade} from "react-reveal";


const Skills = () => {
    return (
        <Wrapper id='skills'>
            <div className='maxWidth'>
                <div className='center'>
                    <h2 className='heading'>Skills 🔥</h2>
                </div>

                <Fade bottom duration={1000} distance="40px">
                    <div className='flex'>

                        {Data.map((val, index, key) => {
                            return <SkillsSection key={val.id} image={val.image} name={val.name} />
                        })}

                    </div>
                </Fade>

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    .heading{
        border-bottom: 5px solid #ff6e00;
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 10px;
    width: -webkit-max-content;
    width: max-content;
    }

    .center{
        display: flex;
    justify-content: center;
    padding-top:100px;
    }

    .image{
            cursor: pointer;
    height: 150px;
    margin-top: 30px;
    transition-duration: .2s;
    width: 100%;
    }

    .flex{
        display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-wrap:wrap;
    padding-top:50px;
    }

    @media only screen and (max-width:600px){
        .image{
            height:auto;
        }
    }

    .maxWidth{
        max-width: 1340px 
    }
    
    `

export default Skills