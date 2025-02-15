import product from '../data/data.js'
import rating from '../../public/images/ratings/rating-45.png'
import { useContext, useState } from 'react'
import { Cartcontexe } from './cartprovider.jsx';
 // Import du composant Cart

export const Men = () => {
    const [Quantity, setQuantity] = useState({});
    const {cart,setcart}=useContext(Cartcontexe);

    const handelQ = (e, id) => {
        const Q = Math.max(1, Number(e.target.value)) || 1;
        setQuantity((prev) => ({ ...prev, [id] : Q }));
    };

    const handelAddbtn = (e) => {
        const id = Number(e.currentTarget.dataset.id);
        const quantity = Quantity[id] || 1 ;
    
        const produ = product.find((elemnt) => Number(elemnt.id_produit) === id);
    
        if (produ) {
            setcart((prevCart) => {
                const prodcart = prevCart.find((item) => Number(item.id) === id);

                if (prodcart) {
                    // Mettre à jour la quantité du produit existant
                    return prevCart.map((item) =>
                        Number(item.id) === id ? { ...item, quantite : item.quantite + quantity } : item
                    );
                } else {
                    const newproduit={
                        id: produ.id_produit,
                        title : produ .title,
                        image: produ.image,
                        quantite: quantity,
                        prix:produ.prix
                                      }
                    // Ajouter le produit s'il n'est pas encore dans le panier
                    return [...prevCart,  newproduit ];
                }
            });
        } else {
            alert("Produit introuvable !");
        }
    };

    return (
        <>
            <div className="h-auto  mx-14 grid grid-cols-5 p-14 gap-y-3 gap-3 text-black">
                {product.map((prod) => (
                    <div key={prod.id_produit}>
                        <div className="border-2 bg border-solid rounded-md  w-[250px] bg-white h-[510px] ">
                           
                                <div>
                                    <img src={prod.image} className="w-[300px] border-1 " data-id={prod.id_produit} />
                                </div>
                                <div className="grid grid-cols-1 gap-4 ml-2">
                                <div className='text-center mt-2 font-medium'>
                                    <h1>{prod.marque}</h1>
                                </div>
                                <div>
                                    <h1 className="font-sans font-semibold h-[65px]">{prod.title}</h1>
                                </div>
                                <div>
                                    <img src={rating} className="w-20" alt="" />
                                </div>
                                <div>
                                    <p className="text-xl font-sans ">Stock : {prod.stock}</p>
                                    <label htmlFor="q">Quantity: </label>
                                    <input
                                        value={Quantity[prod.id_produit] || 1}
                                        onChange={(e) => handelQ(e, prod.id_produit)}
                                        name="q"
                                        type="Number"
                                        placeholder="0"
                                        className="w-16 outline-none px-2 rounded-md border-2 hover:border-orange-400 mt-2 ml-4 text-black"
                                    />
                                </div>
                                <div>
                                    <span className="font-sans text-xl text-center font-medium">{prod.prix} $</span>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button onClick={handelAddbtn} className="bg-blue-500 hover:bg-sky-200 hover:text-black 400 px-8 py-2 rounded-lg border-none font-semibo text-white font-semibold" data-id={prod.id_produit}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Transmission de l'état Cart à Cart.jsx via props */}
            
        </>
    );
};
