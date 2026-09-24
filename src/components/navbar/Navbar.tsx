import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Navbar() {
    const { cartQty, handleLogout } = useShoppingCartContext();

    return (
        <nav className="border-b bg-green-400 shadow-md">
            <Container>
                <div className="flex min-h-16 flex-col gap-4 py-3 md:flex-row md:items-center md:justify-between">

                    {/* Logo */}
                    <div className="text-center md:text-right">
                        <Link
                            to="/"
                            className="text-xl font-bold text-white transition hover:text-green-950"
                        >
                            MyShop
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-wrap items-center justify-center gap-1 text-sm font-medium md:gap-2">
                        <li>
                            <Link
                                to="/"
                                className="rounded-lg px-3 py-2 transition hover:bg-green-500 hover:text-white"
                            >
                                خانه
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/store"
                                className="rounded-lg px-3 py-2 transition hover:bg-green-500 hover:text-white"
                            >
                                فروشگاه
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="rounded-lg px-3 py-2 transition hover:bg-green-500 hover:text-white"
                            >
                                درباره ما
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="rounded-lg px-3 py-2 transition hover:bg-green-500 hover:text-white"
                            >
                                تماس با ما
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/communication"
                                className="rounded-lg px-3 py-2 transition hover:bg-green-500 hover:text-white"
                            >
                                ارتباط با ما
                            </Link>
                        </li>
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center justify-center gap-2">

                        {/* Logout */}
                        <button
                            onClick={handleLogout}
                            className="rounded-xl bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                        >
                            خروج
                        </button>

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="relative rounded-xl bg-white px-3 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100"
                        >
                            سبد خرید

                            {cartQty > 0 && (
                                <span className="absolute -right-2 -top-2 flex min-w-6 items-center justify-center rounded-full bg-red-500 px-1.5 py-1 text-xs font-bold text-white">
                                    {cartQty}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;

