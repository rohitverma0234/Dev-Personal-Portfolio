import React from 'react'
import styled from "styled-components";
import Data from './Data';
import PortfolioSection from './PortfolioSection';

const Portfolio = () => {
    return (
        <Wrapper id="gallery">
            <div className='center'>
                <h2 className='heading'>Portfolio 📷</h2>
            </div>

            <div className='flex'>

                {Data.map((val, index, key) => {
                    return <PortfolioSection image={val.image}  />
                })}

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
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
        box-shadow: 0 0 20px #f1f1f1;
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
    gap: 2rem;
    flex-wrap:wrap;
    padding-top:50px;
    }

    @media only screen and (max-width:600px){
        .image{
            height:auto;
        }
    }
    
    `

export default Portfolio