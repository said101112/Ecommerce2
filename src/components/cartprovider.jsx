import { createContext, useContext ,useState } from "react"

import product from "../data/data.js";
export const Cartcontexe=createContext();
export const CartProvider=({children})=>{
    const [cart,setcart]=useState([]);
   
return (
    <>
    <Cartcontexe.Provider value={{cart,setcart}} >
       {children}
    </Cartcontexe.Provider>
    </>
)
}
