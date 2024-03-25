import React from 'react'
import styled from 'styled-components'
import Education from './Education'
import Resume from './Resume'

const Heading = () => {

    const Data2 = {
        subhead:"My Education"
    }

    return (
        <Wrapper id='experience'>

            <div className='center'>
                <h2 className='heading'>Resume 💼</h2>
            </div>

            <div className='resume'>
                <Resume {...Data2} />
                <Education />
            </div>

        </Wrapper>


    )
}

const Wrapper = styled.section`
.center{
    display:flex;
    justify-content:center;
    padding-top:100px;
  }
  
  .heading{
      border-bottom: 5px solid #ff6e00;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
  padding-bottom: 10px;
  width: -webkit-max-content;
  width: max-content;
  }

  .resume{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top:50px;
  }

  @media only screen and (max-width:600px){
    .resume{
        display: inline;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding-top:50px;
      }
  }
`

export default Heading