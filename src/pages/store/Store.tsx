import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/product_item/Productitem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { Iproducts } from "../../types/services";


function Store() {

    const [product,setProduct] = useState<Iproducts[]>([])

    useEffect(()=>{
        getProducts().then(result=>{
            setProduct(result)
        })
    },[])

    return (  
        <Container>
            <div>
                <div className="text-center py-3 my-1 rounded bg-amber-100">
                    <h1>جدیدترین محصولات</h1>
                </div>

                <div className="grid grid-cols-3 gap-5 my-10 ">
                    {product.map(p => {
                        return(
                            <Link key={p.id} to={`/product/${p.id}`}>
                                <ProductItem {...p} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </Container>
    );
}

export default Store;