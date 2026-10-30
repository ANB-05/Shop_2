import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import ProductItem from "../../components/product_item/Productitem";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { getProducts } from "../../services/api";
import type { Iproducts } from "../../types/services";
import Grid from "../../components/grid/grid";

function Favorites() {

    const { favorites } = useShoppingCartContext();

    const [products, setProducts] = useState<Iproducts[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        getProducts()
            .then(data => {
                setProducts(data);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    const favoriteProducts = products.filter(product =>
        favorites.includes(product.id)
    );

    if (loading) {
        return (
            <Container>
                <p className="text-center my-10">
                    در حال دریافت محصولات...
                </p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <p className="text-center my-10">
                    دریافت محصولات با خطا مواجه شد.
                </p>
            </Container>
        );
    }

    return (
        <Container>

            <h1 className="text-center text-2xl my-5">
                محصولات مورد علاقه ❤️
            </h1>

            {favoriteProducts.length === 0 ? (

                <p className="text-center my-10">
                    هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید.
                </p>

            ) : (

                <Grid>

                    {favoriteProducts.map(product => (
                        <ProductItem key={product.id} {...product} />
                    ))}

                </Grid>

            )}

        </Container>
    );
}

export default Favorites;