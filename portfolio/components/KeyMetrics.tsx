"use client"

import React from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

const metrics = [
  { id: 1, value: "5+", label: "Years of Experience", description: "Host and blah blah blah kai kala" },
  { id: 2, value: "12k", label: "YouTube Views", description: "Some short description" },
  { id: 3, value: "3", label: "Albums", description: "Short description" },
  { id: 4, value: "50+", label: "Gigs", description: "Short description" },
  { id: 5, value: "120", label: "Clients", description: "Short description" }
]

// container variant with staggerChildren
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25
    }
  }
}

// item variant for each metric card
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 }
  }
}

const KeyMetrics = () => {
  const ref = React.useRef<HTMLElement | null>(null)
  const prefersReduced = useReducedMotion()
  // animate when element is in view (only once recommended)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  // if user prefers reduced motion, skip animations
  const animateState = prefersReduced ? "show" : (isInView ? "show" : "hidden")

  return (
    <section ref={ref} className="container mx-auto px-4 py-20 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={animateState}
        aria-hidden={prefersReduced ? "true" : "false"}
      >
        <motion.h2
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          className="text-3xl md:text-6xl font-extrabold mb-10"
        >
          KEY METRICS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <motion.article
              key={metric.id}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white/4 backdrop-blur-sm shadow-md"
              role="group"
              aria-label={`${metric.label}: ${metric.value}`}
            >
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
                {metric.value}
              </h3>
              <p className="text-lg font-semibold mb-1">{metric.label}</p>
              <p className="text-sm text-gray-300">{metric.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default KeyMetrics

