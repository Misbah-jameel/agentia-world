// import Image from "next/image";

// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Neo from "./components/Neo";
import Price from '../app/Price/Payment'
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
export default function Home() {
  return (
    <div >
  {/* <Navbar/> */}
    <Hero/>
    <Neo/>
   <Price/>
    <Contact/>
    {/* <Footer/> */}
    </div>
  );
}
