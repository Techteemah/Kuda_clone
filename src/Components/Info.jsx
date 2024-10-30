import styled from "styled-components"

const Info = () => {

    const cardArray =[
        {
                title: "a",
        dsc: "aaaaaabb"
        },
            
        

    ]
    return(
        <div>
            <Card>
           <h1>This the Info page</h1>
           <p>this is a </p>
        </Card>
    
        </div>
    )   
}
export default Info

const Card = styled.div`
    height: 200px;
    width: 300px;
    background-color: cyan;
    color: white;
`