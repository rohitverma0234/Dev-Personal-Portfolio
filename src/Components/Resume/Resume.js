import React from 'react'
import styled from "styled-components";
import Data from './Data';
import ResumeSection from './ExperienceSec';

const Resume = (props) => {

    return (
        <Wrapper>

            <div className='grid'>
                <div className='subhead-div'>
                    <h2 className='sub-head'>{props.subhead}</h2>
                </div>

                <div>
                    {Data.map((val, index, key) => {
                        return <ResumeSection client={val.client} tenure={val.tenure} title={val.title} desc={val.desc} />
                    })}
                </div>

            </div>



        </Wrapper>
    )
}

const Wrapper = styled.section`
    
    .sub-head{
        font-weight: 600;
        font-size: 1.5rem;
    }

    .subhead-div{
        margin-bottom:30px;
    }

    .grid{
        display: grid;
    justify-content: center;
    align-items: center;
    }

    @media only screen and (max-width:600px){
        .sub-head{
            padding-left:10px;
        }
    }
    
    `

export default Resume