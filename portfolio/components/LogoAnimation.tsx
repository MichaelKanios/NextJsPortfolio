"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import udemy from "@/assets/udemy.png";
import fiverr from "@/assets/fiverr.png";
import elementor from "@/assets/elementor.png";
import logitech from "@/assets/logitech.png";
import oracle from "@/assets/oracle.png"; // διόρθωση

const images = [
  { src: udemy, alt: "udemy" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
];

const LogoAnimation = () => {
  const logos = [...images, ...images]; // duplicate για smooth loop

  return (
    <div className="py-8 bg-purple-200/10 opacity-80">
      <div className="container mx-auto">
        <div
          className="overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
          }}
        >
          <motion.div
            className="flex gap-14 pt-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {logos.map((image, index) => (
              <Image key={index} src={image.src} alt={image.alt} height={30} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
