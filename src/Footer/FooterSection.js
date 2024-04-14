import React from 'react'
import styled from 'styled-components'

const FooterSection = (props) => {
    return (
        <Wrapper>
            <div className='main-div'>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <div>
                        <img className='image' src={props.img} alt='' />
                    </div>


                    <div className='main-div2'>
                        <p className="head">{props.head}</p>
                        <p className='text'>{props.value}</p>
                    </div>
                </a>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .image{
        width: 64px;
        margin-bottom: 10px;
    }

    .main-div{
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 0 10px #f5f5f5;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        padding: 50px 90px 50px 90px;
        text-align: center;
        transition: transform .2s,-webkit-transform .2s;
        width: 125px;
    }

    .main-div:hover{
        background-color: rgb(254 122 22);
        -webkit-transform: scale(1.07);
        transform: scale(1.07);
        transition-duration: .2s;
    }

    .head{
        font-size: large;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .main-div2{
        width: 215px;
    }

    a{
        text-decoration:none;
        color:black;
    }
   

    `

export default FooterSection