import React from 'react'
import styled from 'styled-components'
import {Fade} from "react-reveal";


const ExpSection = (props) => {
    return (
        <Wrapper>
            <Fade left duration={1000}>
                <div className='flex'>
                    <div className='exp-meta'>
                        <img className="job-logo" src={props.logo} alt="" />
                        <h5 className='job-client'>{props.client}</h5>
                        <h6 className='job-tenure'>{props.tenure}</h6>
                    </div>

                    <div className='exp-details'>
                        <h4 className='job-title'>{props.title}</h4>
                        <p className='exp-description'>{props.desc}</p>
                        <h6 className='resp'>Responsibilites</h6>

                        <ul className='resp-list'>
                            <li>{props.li1}</li>
                            <li>{props.li2}</li>
                            <li>{props.li3}</li>
                            <li>{props.li4}</li>
                            <li>{props.li5}</li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </Wrapper>

    )
}

const Wrapper = styled.section`

.job-logo{
    height: auto;
    margin-bottom: 20px;
    width: 150px;
}

.job-client{
    font-weight: 700;
    font-size:18px;
    margin-bottom: 6px;
}

.job-tenure{
    color: gray;
    font-size: small;
    font-weight: 500;
}

.exp-meta{
    align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 80%;
}

.job-title{
    font-weight: 700;
    font-size: 1.5rem;
}

.exp-description{
    font-size: small;
    margin-top: 10px;
    line-height: 18px;
}

.resp{
    font-weight: 700;
    font-size:1rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top:30px;
}

.resp-list{
    padding-left: 2rem;
    margin-top: 0;
    font-size: small;
    line-height: 18px;
}

.flex{
    display: flex;
justify-content: center;
align-items: center;
align-items: center;
border-radius: 10px;
box-shadow: 0 0 10px #e0e0e0;
display: flex;
margin-bottom: 20px;
overflow: hidden;
padding: 20px;
width: 39rem;

}

.exp-details{
    margin-left: 60px;
}

@media only screen and (max-width:600px){
    .flex{
        width:auto;
        display: inline-block;
        padding:20px;
    }

    .exp-meta{
        width:auto;
    }

    .exp-details{
        margin-left:auto;
        padding-top:20px;
    }
}
`

export default ExpSection