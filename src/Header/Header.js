import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'


const Header = () => {
  return (
    <MainHeader>

    <div>
    <span className='logo'><i>Rohit</i></span>
    </div>

    <Nav/>


    </MainHeader>
  )
}

const MainHeader = styled.header`
    background-color: #f9fafc;
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-around;
    -moz-box-align: center;
    align-items: center;
    left: 0px;
    position: fixed;
    right: 0px;
    z-index: 1030;
    height: 74px;
    gap:14rem;

    @media only screen and (max-width:600px){
      gap:15rem;
    }

    .logo{
         color: rgb(255 110 0);
         font-family: 'Love Light', cursive;
         font-size: 35px;
    }

    `






export default Header