import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/product_item/Productitem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import type { Iproducts } from "../../types/services";
import Grid from "../../components/grid/grid";


function Store() {

    const [product,setProduct] = useState<Iproducts[]>([])

    useEffect(()=>{
        getProducts().then(result=>{
            setProduct(result)
        })
    },[])

    return (  
        <Container>
            <div className="text-center py-3 my-3 rounded bg-amber-100">
                <h1>جدیدترین محصولات</h1>
            </div>
            <Grid>
                {product.map(p => (
                    <ProductItem key={p.id} {...p} />
                ))}
            </Grid>
        </Container>
    );
}

export default Store;