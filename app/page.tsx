
import Image from "next/image";
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contect from "./Components/Contect";
import Footer from "./Components/Footer";



import { Button } from "@/components/ui/button"

import { GoogleAuthProvider } from "firebase/auth";

export default function Portfolio() {

  const provider = new GoogleAuthProvider();
  
  return (
    <>
    
        < Navbar/>
        <Hero />

        <Button>Click me</Button>

        <About />
        <Skill />
        <Project />
        <Contect />
        <Footer />


      
    </>
  );
}
