import React from 'react'
import styled from 'styled-components'

const SkillsSection = (props) => {

  return (
    <Wrapper>
        
    <div className='img-div'>
        <img className='image' src={props.image} alt="" />

        <span className='name'>{props.name}</span>
    </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
    .name{
      display:none;
    }
    
    .image:hover + .name{
      display: block;
    position: absolute;
    margin-top: -157px;
    background-color: black;
    color: white;
    padding: 6px;
    border-radius: 7px;
    margin-left: 49px;
    font-size: 15px;
    }
    `

export default SkillsSection