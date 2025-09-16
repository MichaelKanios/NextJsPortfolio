"use client"
import { useEffect } from "react";
import { useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { motion } from "motion/react"
import Image from "next/image";
import { Main } from "next/document";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

 const Hero = () => {
  // ξεκινάει με το πρώτο χρώμα
  const color = useMotionValue(COLORS_TOP[0]);

  // animation loop
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // φτιάχνεις gradient χρησιμοποιώντας το motion value
  const backgroundImage = useMotionTemplate`
  radial-gradient(125% 125% at 50% 50%, ${color}, transparent 70%)
`

  const border =useMotionTemplate `1px sokid ${color}`
  const boxShadow = useMotionTemplate `0px 4px 24px ${color}`
  return (
    <motion.section 
  style={{ backgroundImage }}
  className="relative grid min-h-screen md:place-content-center overflow-hidden px-4 py-24 text-gray-200 bg-black"
>
  <div className="flex flex-col items-center">
    <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
      Open for work</span>
      <h1 className="text-white/40 text-4xl md:text-7xl font-black">Hi , I am </h1>
      <h2 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight 
      text-transparent text-5xl md:text-7xl ">Michael Kanios</h2>
    
        <Image 
        className="rounded-full border-1 border-gray-600 opacity-90"
          src="/Main.png" 
          alt="Main image" 
          width={250} 
          height={250} 
        />   
      
  
    <p className="my-6 max-w-xl text-center">React and Wordpress Developer base in Athens</p>

    <motion.button
    style={{
        border,
        boxShadow
      }}
      whileHover={{
        scale:1.015
      }}
      whileTap={{
        scale:0.958
      }}
      className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
    >Contact Me
      <FiArrowRight className="" />
    </motion.button>
    </div>

    
</motion.section>

  );
};

export default Hero
