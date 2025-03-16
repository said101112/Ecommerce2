    import React, { useState, useEffect } from 'react';
    import product from '../data/data';
    import { Cartcontexe } from './cartprovider.jsx';
import { useContext } from 'react';
    export const SectionProduct = () => {
        const [successMessages, setSuccessMessages] = useState({});
        const {cart,setcart}=useContext(Cartcontexe);
        const [Quantity,setQ]=useState({

        })

        
        const handleAddToCart = (productId) => {
            setSuccessMessages((prev) => ({
                ...prev,
                [productId]: true,
            }));

            setTimeout(() => {
                setSuccessMessages((prev) => ({
                    ...prev,
                    [productId]: false,
                }));
            }, 3000);
        };

        return (
            <div className="transition">
                <h1 className="text-center mt-[200px] text-4xl font-extrabold text-gray-800">
                    Top Product Sale
                </h1>
                <div className="flex justify-center items-center mt-10">
                    <div className="flex gap-5">
                        {product.map((product) => (
                            product.id_produit < 4 && (
    <div
                                key={product.id_produit }
                                className={`product border border-gray-300 h-[500px] w-[262px] shadow-lg bg-white grid rounded-2xl transition-all duration-1000 transform`}
                            >
                                <div className="">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className=" rounded-tl-2xl rounded-tr-2xl  w-[260px] h-[170px]"
                                    />
                                </div>
                                <div className="mt-2 text-center w-full px-4">
                                    <h2 className="text-[1.2rem] font-semibold text-gray-800">
                                        {product.title}
                                    </h2>
                                    <p className="text-gray-600 text-lg font-medium mt-2">
                                        ${product.prix}
                                    </p>
                                </div>
                            
                                <div className="mt-2 w-full px-4 text-center gap-1">
                                   <label htmlFor="Q" className='gap-5'> <span>Quantity : </span>  </label>
                                    <input type="number" id='Q' className='w-14  px-2 border-2 rounded-md'  />
                                 
                                </div>
                                <div className="flex justify-center ">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span
                                            key={i}
                                            className={`text-[28px] ${i < product.note ? "text-yellow-500" : "text-gray-200"}`}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center h-7 '>
                                {successMessages[product.id_produit] && (
                                        <img src="https://cdn-icons-png.flaticon.com/128/18295/18295118.png" alt="" width={30} className=''/>
                                    )}
                                </div>
                                <div className="mt-3 w-full flex justify-center ">

                                    <button
                                        onClick={() => handleAddToCart(product.id_produit)}
                                        className="bg-blue-500 text-white px-10 py-[8px] rounded-md hover:bg-blue-600 transition duration-300 mb-4 "
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            )
                            
                        ))}
                    </div>
                </div>
            </div>
        );
    };
