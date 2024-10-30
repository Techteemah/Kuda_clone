import { BiLogoPlayStore } from "react-icons/bi"
import { FaApple } from "react-icons/fa"
import styled from "styled-components"

const Hero = () => {
    return(
        <Container>
            <Wrapper>
                <TextBox><h1>The money app for Africans.</h1>
                <p></p>
                <Buttons>
                    <button><FaApple/>App store</button>
                    <button> <BiLogoPlayStore /> <span>Play store</span></button>
                </Buttons>
                </TextBox>
                <ImageBox></ImageBox>
            
            </Wrapper>
          
        </Container>
    )
}
export default Hero

const Container = styled.div`
background-color: yellow;
max-width: 1280px;
min-height: calc(100vh - 70px);
margin-left:auto;
margin-right:auto;
padding:0px 10px;
display: flex;
align-items: center;
`



const Wrapper = styled.div``
const TextBox = styled.div``
const Buttons = styled.div``
const ImageBox = styled.div``