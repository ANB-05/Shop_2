import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import type { Iproducts } from "../../types/services";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
    const params = useParams()

    const [Pinfo , setPinfo] = useState<Iproducts>() 

    const {handleIncreaseProductQty,handleDecreaseProductQty,handelDeleteItem,getProductQty,cartItem} = useShoppingCartContext()

    useEffect(()=>{
        getProduct(params.id as string).then(data=>{
            setPinfo(data)
        })
    },[])

    
    console.log(cartItem)

    return (  
        <>
            <Container>
                <div className="h-150 shadow-2xl mt-5 grid grid-cols-12">
                    <div className="col-span-9 ml-3">
                        <h2 className="m-3 py-2 text-center border-b-2">{Pinfo?.title}</h2>
                        <h3>{Pinfo?.category}</h3>
                        <p className="mt-5">
                            {Pinfo?.description}
                        </p>
                    </div>

                    <div className="p-4  col-span-3">
                        <img src={Pinfo?.image} className="w-full h-74 rounded-sm"/>
                        <div className="p-3 text-right flex flex-col" >

                            {
                                getProductQty(parseInt(params.id as string)) == 0 ? 
                                <Button onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))} variant="success" className="my-2 hover:cursor-pointer">
                                اضافه کردن به سبد خرید
                                </Button>
                                :
                                (
                                    <div>
                                        <Button onClick={()=>handleIncreaseProductQty(parseInt(params.id as string))} variant="success" className="w-full my-3 hover:cursor-pointer">
                                        +
                                        </Button>
                                        <Button onClick={()=>handleDecreaseProductQty(parseInt(params.id as string))} variant="danger" className="w-full hover:cursor-pointer">
                                        -
                                        </Button>
                                        <Button onClick={()=>handelDeleteItem(parseInt(params.id as string))} variant="danger" className="w-full my-3 hover:cursor-pointer">
                                        حذف از سبد خرید
                                        </Button>
                                    </div>
                                )

                            }

                            {
                            getProductQty(parseInt(params.id as string)) > 0 &&<div className="bg-blue-950 text-white font-bold p-2 my-2 rounded-2xl text-center">
                                {getProductQty(parseInt(params.id as string))}
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Product;