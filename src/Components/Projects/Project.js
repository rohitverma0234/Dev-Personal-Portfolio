import React from 'react'
import styled from 'styled-components'
import Data from './Data'
import ProjectSection from './ProjectSection'

const Project = () => {
  return (
    <Wrapper id="projects">

    <div className='maxWidth'>

      <div className='center'>
        <h2 className='heading'>Projects 💻</h2>
      </div>

      <div className='flex'>
        {Data.map((val,index,key)=>{
          return <ProjectSection key={val.id} img={val.img} title={val.title} desc={val.desc} img1={val.img1} img2={val.img2} img3={val.img3} img4={val.img4} img5={val.img5} img6={val.img6} link={val.link}/>
        })}
      </div>

      </div>

      
    </Wrapper>
  )
}

const Wrapper = styled.section`

  display:flex;
  justify-content:center;
  align-items:center;
  
    .heading{
        border-bottom: 5px solid #ff6e00;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
    padding-bottom: 10px;
    }
    
    .center{
      display:flex;
      justify-content:center;
      padding-top:100px;
    }

    .flex{
      display:flex;
      flex-wrap:wrap;
      gap:1.5rem;
      justify-content:center;
      align-items:center;
      padding-top:50px;
    }

    .maxWidth{
      max-width:1340px;
    }

    

    
    
    `

export default Project