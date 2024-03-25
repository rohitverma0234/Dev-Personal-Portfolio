import React from 'react'
import styled from 'styled-components'

const ProjectSection = (props) => {
  return (
    <Wrapper>
      <div className='main-div'>

        <div className='project-card'>

        <a className='project-a' href={props.link} target="_blank" rel="noreferrer"> 

          <div className='img-div'>
            <img className='project-img' src={props.img} alt='' />
          </div>

          <div className='project-detail'>
            <p className='project-title'>{props.title}</p>
            <p className='project-desc'>{props.desc}</p>
          </div>

          <div className='project-techs'>
            <img className='icon' src={props.img1} alt='' /><span className='icon-text'>{props.text}</span>
            <img className='icon' src={props.img2} alt='' /><span className='icon-text'>{props.text}</span>
            <img className='icon' src={props.img3} alt='' /><span className='icon-text'>{props.text}</span>
            <img className='icon' src={props.img4} alt='' /><span className='icon-text'>{props.text}</span>
          </div>

          </a>



        </div>

      </div>

    </Wrapper>

  )
}

const Wrapper = styled.section`
width: 22%;

.project-a{
  text-decoration: none;
}

@media only screen and (max-width:600px){
{
  width: 100%;
  margin-left:20px;
  margin-right:20px;
}

}



.project-img{
    height: 100%;
  margin-bottom: 20px;
  width: 100%;
  }

  .img-div{
    height: 150px;
  }

  .project-card{
    border-radius: 10px;
  box-shadow: 0 0 10px #e0e0e0;
  cursor: pointer;
  margin-bottom: 20px;
  transition: -webkit-transform .2s;
  transition: transform .2s;
  transition: transform .2s,-webkit-transform .2s;
  }

.project-card:hover {
 -webkit-transform:scale(1.07);
 transform:scale(1.07)
}

  .project-title{
    font-size: larger;
  font-weight: 700;
  margin-bottom: 2px;
  color:black;
  }

  .project-desc{
    color: gray;
  margin-bottom: 0;
  font-weight:500;
  }

  .project-detail{
    padding: 20px;
    height: 150px;
  }

  .project-techs{
    border-top: 2px solid #f1f1f1;
  padding:20px;
  }

  .icon{
    cursor: pointer;
  height: 20px;
  margin-right: 10px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  padding: 0.25rem;
  }

  .icon-text{
    display: none;
    width:50px;
    text-align:center;
    margin-top: -65px;
    margin-left: 20px;
  background-color: black;
  color: white;
  padding: 4px;
  border-radius: 4px;
  font-size: 14px;
  }

  

//   .icon:hover + .icon-text{
//     display:block;
//   }

//   .icon-text1{
//     display: none;
//     width:50px;
//     text-align:center;
//     margin-top: -65px;
//     margin-left: 40px;
//   background-color: black;
//   color: white;
//   padding: 4px;
//   border-radius: 4px;
//   font-size: 14px;
//   }

//   .icon:hover + .icon-text1{
//     display:block;
//   }


//   .icon-text2{
//     display: none;
//   width:50px;
//   text-align:center;
//   margin-top: -65px;
//   margin-left: 60px;
//   background-color: black;
//   color: white;
//   padding: 4px;
//   border-radius: 4px;
//   font-size: 14px;
//  }

//   .icon:hover + .icon-text2{
//     display:block;
//   }



//   .icon:hover + .icon-text {
//     display: block;
//   }

`

export default ProjectSection