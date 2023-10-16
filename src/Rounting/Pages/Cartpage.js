import { useContext, useState } from "react"
import Header from "../../components/header/Header"
import { Cartcontext } from "../Navigation"
import "./ex1.css"
import { BsCurrencyRupee } from "react-icons/bs";
import FooterComp from "./Footer"




const Cart = ({ cart }) => {
    const GlobalState = useContext(Cartcontext)
    const card = GlobalState.cart


    const totalPrice = card.reduce((price, item) => price + item.quantity * item.price, 0)
    return (
        <>
        
        <div className="card-items">
            <Header/>
            {
                card.map((item, index) => {
                    return (
                        <div key={index} className="card-items-list">
                            <img src={item.image} alt={item.image} width={350} height={350} className="card-items-image" />
                            {/* <div className="card-items-name">{item.id}</div> */}
                            <div className="card-items-name">{item.category}</div>
                            <div className="card-items-name">{item.title}</div>
                            {/* <div className="card-items-name">{item.description}</div> */}
                            {/* <p>${item.price}</p> */}
                            <div className="card-items-price"><BsCurrencyRupee/> {item.price}</div>
                            <div className="card-items-functin">
                                <button className="card-items-add" onClick={() => GlobalState.addItemToCart(item)}>+</button>
                                {item.quantity}
                                <button className="card-items-remove" onClick={() => GlobalState.removeItemToCart(item)}>-</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="card-items-totle-price-name">Total price <div className="card-items-totle-price"><BsCurrencyRupee/>{totalPrice}</div></div>
        </div>
      <FooterComp/>
      </>
    )
}
export default Cart