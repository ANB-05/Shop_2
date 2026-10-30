import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"
import { useShoppingCartContext } from "./context/ShoppingCartContext"
import PrivateRoute from "./components/privateRoute/PrivateRoute"
import Login from "./pages/login/Login"
import About from "./pages/about/About"
import ContactUs from "./pages/contactUs/ContactUs"
import Blogs from "./pages/blogs/Blogs"
import BlogPage from "./pages/blogPage/BlogPage"
import Favorites from "./pages/favorites/Favorites"



function App() {

  const {isLogin} = useShoppingCartContext()

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<ContactUs />}/>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={isLogin ? <Navigate to='/' /> : <Login /> } />
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart /> } />
          </Route>
        </Routes>
      </Layout>
  )
}

export default App
