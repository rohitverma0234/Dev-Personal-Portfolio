import React from 'react'
import styled from 'styled-components'
import Data from './Data'
import WidSection from "./WidSection";
import {Fade} from "react-reveal";


const Whatido = () => {
    return (
        <Wrapper id="wid">
            <div className='maxWidth'>

                <div class="center">
                    <h2 className='heading'>What I Do? 👩‍💻</h2>
                </div>
                <Fade right duration={1000}>
                    <div className='flex'>
                        {Data.map((val, index, key) => {
                            return <WidSection key={val.id} point={val.point} />
                        })}
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
flex-direction: column;
background-color: #f9fafc;
    box-shadow: 0 0 10px #e0e0e0;
    margin-top: 100px;
    padding: 50px;

    .heading{
        border-bottom: 5px solid #ff6e00;
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 30px;
        padding-bottom: 10px;
        width: -webkit-max-content;
        width: max-content;
    }

    .center{
        display:flex;
        justify-content:center;
        padding-bottom:50px;
    }

    .key-div{
        display: flex;
        flex-wrap: wrap;
    }

    .flex{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        gap:1rem;
    }

    @media only screen and (max-width:600px){
        .flex{
            display:inline-block;
        }
    }

    .maxWidth{
        max-width: 1340px;
    }

    
    `

export default Whatido