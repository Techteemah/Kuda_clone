import Personal from "./Pages/Personal"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./static/Header"
import Footer from "./static/Footer"
import Business from "./Pages/Business"
import Companies from "./Pages/Companies"

const App =() =>{
  
  return (
    <div>
      
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" element = {<Personal/>} />
        <Route path="/business" element = {<Business/>} />
        <Route path="/companies"  element= {<Companies/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   
   
 


    </div>
  )
}

export default App
