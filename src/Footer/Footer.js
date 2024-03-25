import React from 'react'
import styled from 'styled-components'
import Data from './Data'
import FooterSection from './FooterSection'

const Footer = () => {
    return (
        <Wrapper id="contact">
            <div className='head-div'>
                <h2 className='heading'>Contact me 📱</h2>
            </div>

            <div className='main'>
                {Data.map((val, key, index) => {
                    return <FooterSection key={val.id} img={val.img} head={val.head} value={val.value} link={val.link}/>
                })}
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
    .head-div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .heading{
        border-bottom: 5px solid #673ab766;
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 30px;
        padding-bottom: 10px;
        text-align:center;
        width: max-content;
        padding-top: 100px;
        border-bottom: 5px solid rgb(255, 110, 0);
    }

    .main{
        display:flex;
        justify-content:center;
        align-item:center;
        gap:2rem;
    }

    @media only screen and (max-width:600px){
        .main{
            display: grid;
            justify-content: center;
            align-items: center;
        }
    }

    
    `

export default Footer