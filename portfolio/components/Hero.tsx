"use client"
import { useEffect } from "react";
import { useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { motion } from "motion/react"

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
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${color}`;
  const border =useMotionTemplate `1px sokid ${color}`
  const boxShadow = useMotionTemplate `0px 4px 24px ${color}`
  return (
    <motion.section 
    style={{backgroundImage}}
    className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200">
        <div className="z-10 flex flex-col items-center">
            <span className="mb-1.5 inline-block">Test</span>

        </div>

    </motion.section>
  );
};

export default Hero
