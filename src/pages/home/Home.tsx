import Container from "../../components/container/Container";
import HeroSection from "../../components/heroSection/HeroSection";


function Home() {
    return ( 
        <Container>
            <div className="p-3 my-5 my-2 flex justify-center items-center bg-amber-600 text-white rounded-2xl">
                <h1>this is home</h1>
            </div>
            <div>
                <HeroSection />
            </div>
        </Container>
    );
}

export default Home;