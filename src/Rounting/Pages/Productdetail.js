import axios from "axios"
import"./ex3.css"
import { useContext, useEffect, useState } from "react"
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Cartcontext } from "../Navigation"
import FooterComp from "./Footer"
import Header from "../../components/header/Header"


const ProductDetailComp = () => {
    const [product1, setProduct] = useState({})
    const datafromUrl = useParams('')
    console.log(datafromUrl)
    const cartConsumer = useContext(Cartcontext)

    useEffect(
        () => {
            axios.get(`https://fakestoreapi.com/products/${datafromUrl.id}`)
                .then(res => setProduct(res.data))
        }, [datafromUrl.id]

    )
    console.log(product1)
    return (
        <>
        <Header/>
        
        <div style={{backgroundColor:"lightgrey"}}>
           
            <div className="nari">
                <div className="nari2" >
                    <img src={product1.image} alt={product1.image} width={350} height={350}/>
                </div>
                <div className="nari3">
                    <h2>{product1.id}</h2>
                    <h4>{product1.category}</h4>
                    <h3>{product1.title}</h3>
                    <h6>{product1.description}</h6>
                    <h4>${product1.price}</h4>

                    <Button onClick={()=> cartConsumer.addItemToCart(product1)}>Add to Cart</Button>
                    <Button  variant="success"  style={{margin:20}} >Buy Now</Button>
                </div>
            </div>
        
           </div>
           <FooterComp/>

        </>
    )
}
export default ProductDetailComp