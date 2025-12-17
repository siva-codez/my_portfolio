"use client";

import dynamic from "next/dynamic";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const About = dynamic(() => import("./About"), { ssr: false });
const Skill = dynamic(() => import("./Skill"), { ssr: false });
const Project = dynamic(() => import("./Project"), { ssr: false });
const Contect = dynamic(() => import("./Contect"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

const Button = dynamic(
  () => import("@/components/ui/button").then((mod) => mod.Button),
  { ssr: false }
);

export default function ProtectedContent() {
  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contect />
      <Footer />
    </>
  );
}
