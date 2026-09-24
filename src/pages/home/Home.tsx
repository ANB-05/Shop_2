import Container from "../../components/container/Container";
import Features from "../../components/features/Features";
import HeroSection from "../../components/heroSection/HeroSection";


function Home() {
    return ( 
        <Container>
            <div className="p-3 my-5 flex justify-center items-center bg-yellow-200 text-black rounded-2xl">
                <h1>you can find everythings here</h1>
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