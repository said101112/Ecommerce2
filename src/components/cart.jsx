import { useContext, useState } from "react";
import { Cartcontexe } from "./cartprovider.jsx";

export const Cart = () => {
    const [update,setupdate]=useState(null);
    const { cart, setcart } = useContext(Cartcontexe);
    const [quantity, setQuantity] = useState(0);
    const handleSave = (id) => {
      
        setcart(
            cart.map((elemt)=>  Number(elemt.id)===Number(id) ? {...elemt,quantite:quantity} : elemt
            )
        )
        setupdate(false);
      };
 
   

    const removeprod = (id) => {
        setcart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setcart([]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.prix * item.quantite, 0);
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white w-4/5 mx-auto p-10 rounded-xl shadow-xl text-black mt-12">
            <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">Your Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center text-gray-500 text-xl">Your cart is empty.</p>
            ) : (
                <>
                    {/* Cart items list */}
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                                {/* Product Image */}
                                <div className="flex-shrink-0">
                                    <img src={item.image} alt={item.title} className="w-28 h-28 object-cover rounded-md border border-gray-300" />
                                </div>
                                {/* Product Details */}
                             
                                    {
                                        update===item.id ? (
                                            <>
                                            <div>
                                                <input type="text" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))} />
                                                <button  onClick={()=>handleSave(item.id)}>save</button>
                                            </div>
                                           
                                            </>
                                        ) :
                                        <div className="flex-1 ml-6">
                                        <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                                        <p className="text-sm text-gray-500">Price: <span className="font-semibold text-green-500">{item.prix} $</span></p>
                                        <div className="flex justify-stretch items-center ">
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
        </div>
    );
};
