import { useContext, useState } from "react";
import { Cartcontexe } from "./cartprovider.jsx";
import { Link } from "react-router-dom";


export const Cart = () => {
    // fontion pour stocker id de element editing encoure 
    const [update,setupdate]=useState(null);
    // import cart et setcart en utilisant usecontexte 
    const { cart, setcart } = useContext(Cartcontexe);
    // stocker la novellle quantity 
    const [quantity, setQuantity] = useState(0);
    const [islistprod,setclickprod]=useState(false);
    // fontion pour handel save buttton apres 
    const handleSave = (id) => {
        setcart(
            cart.map((elemt)=>  Number(elemt.id)===Number(id) ? {...elemt,quantite:quantity} : elemt
            )
        )
        setupdate(null);
      };
 
   
// focntion pour supprimer un produit dans le panier 
    const removeprod = (id) => {
        setcart(cart.filter((item) => item.id !== id));
    };
// supprimer tout le produit 
    const clearCart = () => {
        setcart([]);
    };
// calcul total de artcile dans le panier % a la quantity 
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.prix * item.quantite, 0);
    };
// code html de la cart 
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white w-4/5 mx-auto p-10 rounded-xl shadow-xl text-black mt-12">
            <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">Your Cart</h1>
            {/* si la carte vide il affiche your cart is empty sinon il affchie la liste de produit demander */}
            {cart.length === 0 ? (
                <p className="text-center text-gray-500 text-xl">Your cart is empty.</p>
            ) : (
                <>
                    {/* Cart items list */}
                    <div className="space-y-6">
                        {/* map return new array et modifier chaque element a ceci */}
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                                {/* Product Image */}
                                <div className="flex-shrink-0">
                                    <img src={item.image} alt={item.title} className="w-48 h-48 object-cover rounded-md border border-gray-300" />
                                </div>
                                {/* Product Details */}
                             
                                    {
                                        update===item.id ? (
                                            
                                            
                                            <div className="flex-1 ml-6">
                                            <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                                            <p className="text-sm text-gray-500">
                                                Price: <span className="font-semibold text-green-500">{item.prix} $</span>
                                            </p>
                                        
                                            <div className="flex justify-stretch items-center h-[40px] space-x-4 mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Quantity: <span className="font-semibold">{item.quantite}</span>
                                                </p>
                                        
                                                <div className="flex items-center space-x-2 h-[50px]">
                                                    <input
                                                        type="number"
                                                        className="w-[60px] text-center bg-gray-200 text-gray-900 border border-gray-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                                                        value={quantity || 1}
                                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                                    />
                                                    <button
                                                        className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md transition duration-200 shadow-md"
                                                        onClick={() => handleSave(item.id)}
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        
                                            <p className="text-lg font-semibold text-red-600">
                                                Total: <span className="text-gray-800">{item.prix * item.quantite} $</span>
                                            </p>
                                        </div>        
                                        ) :
                                        <div className="flex-1 ml-6">
                                        <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                                        <p className="text-sm text-gray-500">Price: <span className="font-semibold text-green-500">{item.prix} $</span></p>
                                        <div className="flex justify-stretch items-center h-[50px] gap-5">
                                        <p className="text-sm text-gray-500">Quantity: <span className="font-semibold">{item.quantite}</span></p>     
                                        <button onClick={()=> setupdate(item.id
                                        )} className="bg-green-600 p-2 px-3 rounded-sm text-slate-100 ">update</button>
                                   
                                    </div>
                                    <p className="text-lg font-semibold text-red-600">Total: <span className="text-gray-800">{item.prix * item.quantite} $</span></p>
                                </div>
                                 }
 
                                {/* Remove Button */}
                                <button
                                    onClick={() => removeprod(item.id)}
                                    className="bg-red-600 text-white rounded-full px-4 py-2 hover:bg-red-500 transition-all duration-300"
                                >
                                    🗑️
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
                        <p className="text-lg text-gray-600">Items in Cart: <span className="font-semibold">{cart.length}</span></p>
                        <p className="text-lg text-gray-600 mb-4">Total Price: <span className="font-semibold text-red-600">{calculateTotal()} $</span></p>

                        {/* Buttons */}
                        <div className="flex justify-between">
                            <button
                                onClick={clearCart}
                                className="bg-gray-500 text-white py-2 px-6 rounded-full text-lg hover:bg-gray-400 transition-all duration-300"
                            >
                                Clear Cart
                            </button>
                            <button
                                className="bg-green-600 text-white py-2 px-6 rounded-full text-lg hover:bg-green-500 transition-all duration-300"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
           <div className="mt-8 text-center">
                <Link to='/men' onClick={()=>setclickprod(!islistprod)}
                    className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-500 transition-all duration-300"
                >
                    Back to Products
                </Link>
                {/* {islistprod && (
                <div className="absolute bg-white shadow-md rounded-md  mt-2 py-2 w-40">
                <Link to="/men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
                <Link to="/women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
                <Link to="/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</Link>
                </div> */}
           {/*  )} */}
            </div>
           
        </div>
     
         
    );
};
