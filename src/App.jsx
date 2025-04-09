import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HowItWork from "./Components/HowItWork";
import Reviews from "./Components/Reviews";
import Counter from "./Components/Counter";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Explore from "./Components/Explore";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWork />
      <Explore/>
      <Reviews />
      <Counter />
      <Blog />
    
      <Footer />
    </>
  );
}

export default App;
