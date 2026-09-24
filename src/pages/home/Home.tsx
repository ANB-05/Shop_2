import Container from "../../components/container/Container";
import Features from "../../components/features/Features";
import HeroSection from "../../components/heroSection/HeroSection";


function Home() {
    return ( 
        <Container>
            <div className="p-3 my-5 flex justify-center items-center bg-amber-600 text-white rounded-2xl">
                <h1>this is home</h1>
            </div>
            <div>
                <HeroSection />
            </div>
            <div>
                <Features />
            </div>
        </Container>
    );
}

export default Home;