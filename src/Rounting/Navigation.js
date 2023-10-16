import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./Pages/LoginScrenn"
import Home from "./Pages/HomeScreen"
import Blog from "./Pages/BlogScreen"
import AboutComp from "./Pages/AboutScreen"
import ProductDetailComp from "./Pages/Productdetail"
import { createContext, useContext, useState } from "react"
import { LoginInfo } from "../App"
import Cart from "./Pages/Cartpage"




export const Cartcontext= createContext()
const Navigationstack = () => {
    //const[login,setLogin]=useState(true)
    const loginFlag=useContext(LoginInfo)
    //console.log(loginFlag)
    const[cart,setCart]=useState([])

    
    const addItemToCart=(card)=>{
        const productExist=cart.find((item=>item.id===card.id));
        if(productExist){ 
            setCart(cart.map((item)=>item.id === card.id   ?

            {...productExist,quantity:productExist.quantity+1} : item)
            );
        }else{
            setCart([...cart,{...card,quantity:1}])
        }  
    }
    const removeItemToCart=(card)=>{
      const productExist=cart.find((item=>item.id===card.id));
      if(productExist){ 
          setCart(cart.map((item)=>item.id === card.id   ?

          {...productExist,quantity:productExist.quantity-1} : item)
          );
      }else{
          setCart([...cart,{...card,quantity:1}])
      }  
  }
    return (
        <BrowserRouter>
        {loginFlag.login ? 
        <Cartcontext.Provider value={{cart,addItemToCart,removeItemToCart}}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Blog" element={<Blog/>} />
                <Route path="/about" element={<AboutComp/>} />
                <Route path="/product/:id" element={<ProductDetailComp/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            </Cartcontext.Provider>
            :
            <Routes>
            {/* <Route path="/" element={<Registration/>} /> */}
            <Route path="/" element={<Login/>} />
            </Routes>
}
        </BrowserRouter>
    )
}
export default Navigationstack