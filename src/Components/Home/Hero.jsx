import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import styled from "styled-components";


const Hero = () => {
    return(
        <Container>
            <Wrapper>
                <TextBox><h1>The money app for <br />Africans.</h1>
                <p>Make free transfers, enjoy cashless payment <br />options and earn interest on your savings with <br />   Kuda.</p>
                <Buttons>
                    <button><FaApple/>App store</button>
                    <button> <BiLogoPlayStore /> <span>Play store</span></button>
                </Buttons>
                </TextBox>
                <ImageBox><img src="heroimg.jpeg" alt="" /></ImageBox>
            
            </Wrapper>
          
        </Container>
    )
}
export default Hero

const Container = styled.div`
/* background-color: yellow; */
max-width: 1280px;
min-height: calc(100vh - 70px);
margin: 0px 120px;
padding: 30px;
display: flex;
align-items: center;
`


const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
  gap: 20px; 
`
const TextBox = styled.div`
margin:10px 0px 0px 5px;
h1{
    font-size: 42px;
    font-family:900;
    color: #40196d;
    font-family: mullish;
}
`
const Buttons = styled.div``
const ImageBox = styled.div``