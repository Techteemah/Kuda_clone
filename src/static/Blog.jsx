import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";

const Blog = () => {
    const  [firstName, setFirstName] = useState ("")
    const [email, setEmail ] = useState ("")
    const [bio, setBio] = useState ("")
    const [myBlog, setMyBlog]= useState ("")

    useEffect(()=>{
        console.log("testinguseeffect");
        if (myBlog){
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => console.log(data))
         } else{
                console.log({AiOutlineLoading3Quarters});
         }    
            } , [myBlog]);
            
    }
