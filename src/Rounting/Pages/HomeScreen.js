import { useContext, useEffect, useState } from "react"
import Header from "../../components/header/Header"
import axios from "axios"
import CardData from "../../components/CardAligner"
import { AppData } from "../../App"
import FooterComp from "./Footer"





const Home=()=>{
    const[ProductData,setProductData]=useState([])


    const userName=useContext(AppData)
   
    useEffect(
        ()=>{
            axios.get(`https://fakestoreapi.com/products`)
            .then(res=>setProductData(res.data))
        },[ProductData]
    )
    
    return(
        <div id="div1" style={{backgroundColor:"#fff"}}>
           
        <Header/>
        
        <CardData ProductData={ProductData}/>
      <FooterComp/>
        </div>

    )
}
export default Home











