import React from 'react'
import styled from 'styled-components'

const PortfolioSection = (props) => {


  return (
    <Wrapper>


      <div className='img-div'>
        {/* <a href="#img1"> */}
        <img className='image' src={props.image} alt="" />
        {/* </a> */}
      </div>


      {/* <a href="#img" class="lightbox" id="img1">
  <span className='bg-img'>
    <img src="./ui1.5f118c108da7a4f55589.png" alt=''/>
  </span>
</a> */}



    </Wrapper>
  )
}

const Wrapper = styled.section`
    // .bg-img{
    //   background-image: url('./ui1.5f118c108da7a4f55589.png');
    // }
    
    .lightbox {
      display: none;
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 1em;
      background: rgba(0, 0, 0, 0.8);
    }
    
    
    .lightbox:target {
      display: block;
    }
    
    .lightbox span {
      display: block;
      height: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }

    .img-div:hover{
      -webkit-transform:scale(1.07);
 transform:scale(1.07);
 transition-duration:.2s
}


    
    
    `

export default PortfolioSection 