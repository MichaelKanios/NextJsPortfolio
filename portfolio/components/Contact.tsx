"use client"

import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1000px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left - Info */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold"
          >
            Get in <span className="text-gray-500">touch</span>
          </motion.h2>

          <div className="space-y-6">
            <a
              href="tel:+306944444444"
              className="block text-2xl font-semibold hover:text-gray-400 transition duration-300"
            >
              📞 +30 694 444 4444
            </a>

            <a
              href="mailto:john@huston.com"
              className="block text-2xl font-semibold hover:text-gray-400 transition duration-300"
            >
              ✉️ john@huston.com
            </a>

            <p className="text-lg text-gray-400 leading-relaxed">
              📍 Street 1 <br /> London, UK
            </p>
          </div>
        </div>

        {/* Right - Map */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.540476592536!2d-0.1277587!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3339e0a3e3%3A0x2b6f24e8a7b7c7e6!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1694422345678!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
