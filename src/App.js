import react from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Developers from "./Components/Developers";
import Sub from "./Components/Sub";
import Footer from "./Components/Footer";



function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <About />
     <Developers />
     <Sub />
     <Footer />
    </div>
  );
}

export default App;
