import React, { useState } from "react";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  return (
    <Wrapper>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">

          <li>
            <a href="#home"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </a>
          </li>


          <li>
            <a href="#about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About
            </a>
          </li>


          <li>
            <a href="#wid"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              What I do?
            </a>
          </li>


          <li>
            <a href="#skills"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#certification"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Certification
            </a>
          </li>

          <li>
            <a href="#experience"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Experience
            </a>
          </li>

          <li>
            <a href="#projects"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Projects
            </a>
          </li>

      

          <li>
            <a href="#contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Contact
            </a>
          </li>

          <a href="./Rohit_Verma_2023.pdf.pdf" target="_blank"><button className='btn'>Resume</button></a>
          
        </ul>

        


        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 1.8rem;
      -moz-box-align: center;
      align-items: center;
      list-style: none;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .navbar-lists li a{
      font-size:16px;
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
  
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 2.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 2.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        ${'' /* transition: all 3s linear; */}
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 1s linear;
        .navbar-link {
          font-size: 30px;
        }
      }
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }

    .btn{
         margin-left:10px;
         color: #212529;
         cursor:pointer;
         font-weight: 400;
        line-height: 1.5;
         background-color: transparent;
         border: 1px solid #ff6e00;
         padding:5px;
         border-radius: .2rem;
         font-size: 16px;
     }

     .btn:hover{
         background-color: #ff6e00;
         color:white;
     }


    
  `;

export default Nav;








// import React, { useState } from "react";
// import styled from "styled-components";
// import { CgMenu, CgClose } from "react-icons/cg";


// const Header = () => {

//     const [menuIcon, setMenuIcon] = useState();


//     return (
//         <Wrapper>

//             <div className='flex'>

                // <div>
                //     <span className='logo'><i>Rohit</i></span>
                // </div>

//                 <div className={menuIcon ? "navbar active" : "navbar"}>
//                     <ul>

//                     <li>
//                     <a href="#home" className="navbar-link" onClick={() => setMenuIcon(false)}>Home</a>
//                     </li>

//                     <li>
//                     <a href="#about" className="navbar-link"  onClick={() => setMenuIcon(false)}>About</a>
//                     </li>

//                     <li>
//                     <a href="#wid" className="navbar-link" onClick={() => setMenuIcon(false)}>What I do?</a>
//                     </li>

//                     <li>
//                     <a href="#skills" className="navbar-link" onClick={() => setMenuIcon(false)}>Skills</a>
//                     </li>

//                     <li>
//                     <a href="#experience" className="navbar-link" onClick={() => setMenuIcon(false)}>Experience</a>
//                     </li>

//                     <li>
//                     <a href="#projects" className="navbar-link" onClick={() => setMenuIcon(false)}>Projects</a>
//                     </li>

//                     <li>
//                     <a href="#gallery" className="navbar-link" onClick={() => setMenuIcon(false)}>Portfolio</a>
//                     </li>

//                     <li>
//                     <a href="#contact" className="navbar-link" onClick={() => setMenuIcon(false)}>Contact</a>
//                     </li>

//                     <button className='btn'>Resume</button>

                    

//                         {/* <a href="#home"><li>Home</li></a>
//                         <a href="#about"><li>About</li></a>
//                         <a href="#wid"><li>What I do?</li></a>
//                         <a href="#skills"><li>Skills</li></a>
//                         <a href="#experience"><li>Experience</li></a>
//                         <a href="#projects"><li>Projects</li></a>
//                         <a href="#gallery"><li>Portfolio</li></a>
//                         <a href="#contact"><li>Contact</li></a> */}
                        
//                     </ul>

//                     {/* two button for open and close of menu */}
//         <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setMenuIcon(true)}
//           />
//           <CgClose
//             name="close-outline"
//             className="mobile-nav-icon close-outline"
//             onClick={() => setMenuIcon(false)}
//           />
//         </div>

                    
//                 </div>

//             </div>

//         </Wrapper>
//     )
// }


// const Wrapper = styled.header`
//     display:flex;
//     justify-content:space-around;
//     align-items:center;
//     background-color:#f8f9fa;
//     font-family: 'Montserrat', sans-serif;
//     padding-bottom: 1rem;
//     padding-top: 1rem;
//     left: 0px;
//     position: fixed;
//     right: 0px;
//     z-index: 1030;

//     .logo{
//         color: #673ab7;
//         font-family: Love Light !important;
//         font-size: 35px;
//     }

//     .logo:hover{
//         color: rgba(0,0,0,.9);
//     }

//     .flex{
//         display:flex;
//         justify-content:space-around;
//         align-items:center;
//         gap: 35rem;
//     }


//     .menu ul{
//         display:flex;
//         justify-content:space-around;
//         align-items:center;
//         list-style-type:none;
//         gap:1.0rem;
//         font-weight:500;
        
//     }

//     ul a{
//         text-decoration:none;
//         color: rgba(0,0,0,.55);
//     }

//     a:hover{
//         color:black;
//     }
    

//     .menu{
//         display:flex;
//         justify-content:space-around;
//         align-items:center;
//     }

//     .btn{
//         margin-left:10px;
//         color: #673ab7;
//         cursor:pointer;
//         font-weight: 400;
//         line-height: 1.5;
//         background-color: transparent;
//         border: 1px solid #673ab7;
//         padding:5px;
//         border-radius: .2rem;
//     }

//     .btn:hover{
//         background-color: #673ab7;
//         color:white;
//     }

//     .mobile-navbar-btn {
//       display: none;
//       background-color: transparent;
//       cursor: pointer;
//       border: none;
//     }

//     .mobile-nav-icon[name="close-outline"] {
//       display: none;
//     }

//     .close-outline {
//       display: none;
//     }

//     @media only screen and (max-width:600px){
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 9999;
//         .mobile-nav-icon {
//           font-size: 4.2rem;
//         }
//       }

//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 30%;
//         right: 10%;
//         z-index: 9999;
//       }

//       .active .close-outline {
//         display: inline-block;
//       }

//     }

//     `

// export default Header 