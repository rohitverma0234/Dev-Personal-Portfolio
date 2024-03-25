import React from 'react'
import styled from 'styled-components'

const WidSection = (props) => {
    return (
        <Wrapper>
            <div>
                <div className='box'>
                    <p><span className='tick'>✔</span>{props.point}</p>
                </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
width:30%;

@media only screen and (max-width:600px){
    {
        width:auto;
    }
}



.tick{
    margin-left: 10px;
    margin-right: 20px;
}

.box{
    align-items: center;
background-color: #fff;
border-radius: 10px;
box-shadow: 0 0 10px #e0e0e0;
color: gray;
display: flex;
margin-bottom: 10px;
padding: 5px 15px;
transition-duration: .2s;
}

.box:hover{
    background-color: #ff6e00;
    color:white;
    transition-duration: .2s;
}

.box p{
    display:flex;
    justify-content:center;
    align-items:center;
    height: 90px;
    font-weight: 500;
}


@media only screen and (max-width:600px){
    .box{
        padding: 20px 10px;
    }
}


`

export default WidSection