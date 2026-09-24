import { useEffect, useState } from "react";
import Button from "../button/Button";
import type { Iproducts } from "../../types/services";
import { getProduct } from "../../services/api";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface Icartitem {
    id: number; 
    qty: number; 
}

function Cartitem({id,qty}: Icartitem) {

    const [product,setProduct] = useState<Iproducts>()

    const {handleIncreaseProductQty,handleDecreaseProductQty,handelDeleteItem} = useShoppingCartContext()

    useEffect(()=>{
        getProduct(id).then(data=>{
            setProduct(data)
        })
    },[])

    return (  
        <>
            <div className="flex flex-row-reverse bg-gray-200 p-3 mt-2">
                <Link to={`product/${id}`}>
                    <img src={product?.image} className="w-40"/>
                </Link>

                <div className="mr-3 flex flex-col ">
                    <h1 className="font-bold mb-3">{product?.title}</h1><br />                    
                    <div className="flex justify-center items-center">
                        <Button onClick={()=>handleIncreaseProductQty(id)} variant="success" className="py-1.5 px-4 m-2 rounded-2xl">+</Button>
                        <span>{qty}</span>
                        <Button onClick={()=>handleDecreaseProductQty(id)} variant="danger" className="py-1.5 px-4 m-2 rounded-2xl">-</Button>
                    </div>
                    <Button onClick={()=>handelDeleteItem(id)} variant="danger" className="hover:cursor-pointer " style={{padding:'10px 20px',margin:'5px 0',borderRadius:'50px',width:'200px'}}>حذف از سبد خرید</Button>
                </div>
            </div>
        </>
    );
}

export default Cartitem;