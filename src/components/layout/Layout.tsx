import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface Layout {
    children : React.ReactNode
}

function Layout({children}: Layout) {
    return (  
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;