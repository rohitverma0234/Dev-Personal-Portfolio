import React from 'react'
import styled from 'styled-components'
import Data from './Data'
import ExpSection from './ExpSection'

const Experience = () => {
    return (
        <Wrapper id="experience">
            <div className='center'>
                <h2 className='heading'>Experience 💼</h2>
            </div>

           

                <div className='expsection'>
                    {Data.map((val, index, key) => {
                        return <ExpSection key={val.id} logo={val.logo} client={val.client} tenure={val.tenure} title={val.title} desc={val.desc} li1={val.li1} li2={val.li2} li3={val.li3} li4={val.li4} li5={val.li5} />
                    })}


                </div>
            


        </Wrapper>
    )
}

const Wrapper = styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
    .heading{
        border-bottom: 5px solid #ff6e00;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
    padding-bottom: 10px;
    width: max-content;
    }
    
    .center{
        display:flex;
        justify-content:center;
        padding-top: 100px;
    }

    .expsection{
        display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content:center;
    }

    
    

    `

export default Experience