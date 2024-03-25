import React from 'react'
import styled from 'styled-components'

const ResumeSection = (props) => {
  return (
    <Wrapper>
        <div className='main'>

                <div className='exp-details'>
                    <p className='tenure'>2000 - 2004</p>
                    <h4 className='job-title'>{props.title}</h4>
                    <p className='exp-description'>{props.desc}</p>
                    <p className='para'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
            </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
.tenure{
    background-color: #ff6e00;
    font-size: .875rem;
    width:102px;
    height:23px;
    text-align:center;
    padding-top: 2px;
    border-radius: 8px;
    color:white;
}

.job-tenure{
    color: #ff6e00;
font-size: small;
}

.job-title{
    margin-bottom:10px;
    font-size: 1.3125rem;
    font-weight: 700;
    line-height: 1.2;
    margin-top:0.9rem;
    margin-bottom: 0.5rem;
}

.exp-description{
    font-size: small;
    color: #ff6e00;
}



.main{
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
    padding-top:12px;
}

.para{
    line-height: 1.8;
    margin-top:20px;
}

@media only screen and (max-width:600px){
    .flex{
        width:auto;
        display: inline-block;
    }

    .exp-details{
        padding-top:20px;
    }

    .main{
        width:auto;
        margin-left:10px;
        margin-right:10px;
    }
}
`

export default ResumeSection