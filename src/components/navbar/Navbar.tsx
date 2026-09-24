import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Navbar() {

    const {cartQty,handleLogout} = useShoppingCartContext()

    return (  
        <div className="flex h-14 border-b bg-green-400 shadow-blue-800 p-5">
            <Container>
                <div className="flex justify-between items-center flex-row-reverse">
                    <ul className="flex">
                        <li className="px-3"><Link to="/">خانه</Link></li>
                        <li className="px-3"><Link to="/store">فروشگاه</Link></li>
                    </ul>

                    <div>
                        <span onClick={handleLogout} className="bg-red-600 text-white p-2 m-1 rounded-2xl hover:cursor-pointer">خروج</span>
                        <Link to="/cart">
                            <button>سبد خرید</button>
                            {cartQty > 0 && <span className="py-1 px-3 bg-red-500 text-white rounded-2xl">{cartQty}</span>}
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Navbar;