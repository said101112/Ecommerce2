    import product from '../data/data.js'
    import rating from '../../public/images/ratings/rating-45.png'
    import { useContext, useState } from 'react'
    import { Cartcontexe } from './cartprovider.jsx';
  

    export const Men = () => {
        const [Quantity, setQuantity] = useState({});
        const {cart,setcart}=useContext(Cartcontexe);
        const [seccessmsg,setmsg]=useState({
        }
        );

        const handelQ = (e, id) => {
            const Q = Math.max(1, Number(e.target.value)) || 1;
            setQuantity((prev) => ({ ...prev, [id] : Q }));
        };
// fontion pour handle affichage de msg secccues lorsque click sur add to cart 
      // et aussi pour ajouter le produit dans la cart avec la valid quantity 
        const handelAddbtn = (e,idp) => {
            const id = Number(e.currentTarget.dataset.id);
            const quantity = Quantity[id] || 1 ;
            setmsg((prev)=>(

                {
                    ...prev,[idp]:true
                }
            )
            );
            setTimeout(()=>{
              setmsg((prev)=>({
                ...prev,[idp]:!prev
              }))
            },3000);
            console.log('le produit et ajouter avec succes ! ')
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
            <div className='flex '>
            <div className='w-60  h-auto border-2'>
        <h1 className='text-center pt-20 font-semibold text-3xl'>Categories </h1>
            </div>
            <div className='flex flex-col '>
            <div className='px-10 pt-14'>
                <h1 className='text-4xl  font-bold from-neutral-900'>Designed for Men, Crafted for Excellence :</h1>
            </div>
                <div className="h-auto  mx-4 grid grid-cols-5 pt-14 gap-y-2 gap-x-2 text-black text-center">
                    {product.map((prod) => (
                        <div key={prod.id_produit}>
                            <div className="border-2 bg border-solid rounded-md  w-[240px] bg-white h-[510px] ">
                            
                                    <div>
                                        <img src={prod.image} className="w-[300px] border-1 " data-id={prod.id_produit} />
                                    </div>
                                    <div className="grid grid-cols-1 gap-3 ml-2">
                                    <div className='text-center mt-2 font-medium'>
                                        <h1>{prod.marque}</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-sans font-semibold h-[65px] ">{prod.title}</h1>
                                    </div>
                                    <div>
                                       
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
                                    <div className="flex justify-center ">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span
                                            key={i}
                                            className={`text-[24px] ${ i < prod.note ? "text-yellow-500" : "text-gray-200"}`}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center h-4'>
                                {seccessmsg[prod.id_produit] && (
                                        <img src="https://cdn-icons-png.flaticon.com/128/18295/18295118.png" alt="" width={30} className=''/>
                                    )}
                                </div>
                                    <div className='flex justify-center items-center '>
                                        <button onClick={(e)=>handelAddbtn(e,prod.id_produit)} className="bg-blue-500 hover:bg-sky-200 hover:text-black 400 px-8 py-2 rounded-lg border-none font-semibo text-white font-semibold " data-id={prod.id_produit}>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
              
                </div> 
            </div>
        );
    };
