import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 bg-linear-to-b from-blue-400 to-blue-600 text-white pt-24 pb-4"
      id="hero"
    >
      <motion.div
        className="max-w-xl space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: false }}
        >
          Tu Web Profesional, Lista para Impactar
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light leading-relaxed opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          viewport={{ once: false }}
        >
          Diseño moderno, rapido y adaptable. Dejamos tu nuegocio con una
          presencia digitial que impacte
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.08 }}
        >
          Quiero mi Web
        </motion.a>
      </motion.div>

      {/* Imagen */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        viewport={{ once: false }}
      >
        <motion.div
          className="relative w-[280px] h-[500px] md:w-[350px] md:h-[620px]"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40 bg-white"></div>

          <Image
            src="/cel-mockup-removebg.png"
            alt="Demo de landing"
            fill
            className="relative object-contain drop-shadow-2xl z-10 rounded-3xl"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
