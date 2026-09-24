import Button from "../../components/button/Button";
import Cartitem from "../../components/cartitem/Cartitem";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";


function Cart() {

    const {cartItem} = useShoppingCartContext()


    return (  
        <>
            <Container>
                <div>
                    {
                        cartItem.map(item=>(
                            <Cartitem {...item} />
                        ))
                    }
                </div>
                
                <div className="flex flex-row-reverse justify-between p-3 bg-amber-100 my-2">
                    <p>قیمت کل : 2000</p>
                    <p>تخفیف : 500</p>
                    <p>قیمت نهایی : 1500</p>
                </div>
                <Button variant="success" className="my-2 mx-2 p-2 w-full ">ثبت نهایی</Button>
            </Container>
        </>
    );
}

export default Cart;