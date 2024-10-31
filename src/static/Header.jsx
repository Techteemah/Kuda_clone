import { IoMdArrowDropdown } from "react-icons/io";

import styled from "styled-components";

import { Link } from "react-router-dom";

import Nigflag from "/Nigflag.png"

import { IoReorderTwoSharp } from "react-icons/io5";

const Header = () => {
    return(
        <Container>
           <LogoNav>
            <Logo>
                <img src="/kuda.png" alt="" />
              
            </Logo>
            <Navigations>
                <Link to= "/" className="nav-link">
                    <nav>
                    <span>Personal</span>
                    <IoMdArrowDropdown size={20} />
                    </nav>
                </Link>
                <Link to= "/business" className="nav-link">  
                    <nav>
                    <span>Business</span>
                    <IoMdArrowDropdown size={20}/>
                    </nav>
                </Link> 
                <Link to= "/companies" className="nav-link">    
                    <nav>
                    <span>Company</span>
                    <IoMdArrowDropdown size={20} />
                    </nav>
                    </Link>
                    <nav>
                    <span>Help</span>
                    <IoMdArrowDropdown size={20} />
                    </nav>
            </Navigations>
           </LogoNav>
           <Buttons>
            <Link to="/">
            <SignBtn> <button>Sign In</button></SignBtn>
            </Link>
            <JoinBtn> <button>Join Kuda </button></JoinBtn>
            <ContBtn> <img src= {Nigflag} alt="" /> </ContBtn>
            <SideNav>
                <IoReorderTwoSharp />
            </SideNav>

           </Buttons>
        </Container>
    )
}
export default Header
const Container = styled.div`
height:70px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.05);
`


const LogoNav = styled.div`
display: flex;
align-items: center;
margin-left:50px;
gap: 100px;

`
const Logo = styled.div`
margin-right: 0px 80px 0px 50px;
    img{
        width:100px;
    }
    display:flex;
    color: rgb(64, 25, 109);
    font-weight:bold;
    
`

const Navigations = styled.div`
display: flex;

nav{
    display: flex;
    align-items: center;
    color: rgb(64, 25, 109);
    margin: 0px 15px;
    text-decoration:none;
    

    span{
        margin-right: 5px;
        font-size: 13px;
        font-weight: 700;
    }
    }
    @media (max-width: 800px){
        display: none;
}
`


const Buttons = styled.div`
display: flex;
gap: 20px;
align-items: center;
 display: flex;
`
const SignBtn = styled.div`
button{
    width:  80px;
    height:30px;
    background-color:transparent;
    border: none;
    font-size: 12px;
    font-weight: 700;
    font-family:mulish;
    color: rgb(64, 25, 109);
}
@media (max-width: 800px){
    display: none;
}  
`
const JoinBtn = styled.div`
button{
    width: 120px;
    height:50px;
    background-color: rgb(64, 25, 109);
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: white;
    border-radius: 10px;
    padding: 5px;
    margin-right: 20px;

}
@media (max-width: 800px){
    display: none;
}
`
const ContBtn = styled.div`
margin-right: 70px;
width: 32px;
height: 34px;
background-color:#A4CCB7;
border-radius: 50%;
img{
    width: 20px;
    height: 30px;
    margin: 1px 0px 0px 6px;
}
`
const SideNav = styled.div`
display: none;
font-size:30px;
margin-left:-30px;

@media (max-width: 800px){
    display: flex;
    align-items: center;
    cursor: pointer;
}`