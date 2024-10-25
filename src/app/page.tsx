"use client"

import Hero from "@/components/Hero/Hero"
import NavBar from "@/components/NavBar"
import About from "@/components/About"
import Card from "@/components/Card"
import Menu from "@/components/Menu/Menu"
import { useEffect } from "react"
import Footer from "@/components/Footer"

export default function App(){

  useEffect( () => {
    (
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    }
  )()
},[]
  )

  return(
    <>
    <NavBar />
    <Hero />
    <Card />
    <About />
    <Menu />
    <Footer />
    </>
  )
};