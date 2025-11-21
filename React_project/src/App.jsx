import Navbar from "./components/Navbar";
import Tagline from "./components/Tagline";
import Hero from "./components/Hero";
import "./index.css";



function App() {
  return (
    <div>
      <Navbar />
      <Tagline />  {/* animated glowing tagline */}
      <Hero />
    </div>
  );
}

export default App;
