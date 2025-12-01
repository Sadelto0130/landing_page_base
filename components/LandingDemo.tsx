"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type DemoItem = {
  img: string;
  titulo: string;
  texto: string;
};


export const LandingDemo = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<DemoItem | null>(null);

  const abrirModal = (demo: DemoItem) => {
    setSelectedDemo(demo);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setSelectedDemo(null);
  };

  const demos = [
    {
      img: "/demo_restaurante.png",
      titulo: "Landing de Restaurantes",
      texto: "Diseño moderno con menú digital, reservas y contacto directo."
    },
    {
      img: "/demo_tiendas.png",
      titulo: "Landing para Tiendas",
      texto: "Catálogo visual, integración a WhatsApp y diseño atractivo."
    },
    {
      img: "/demo_servicios.png",
      titulo: "Landing para Servicios",
      texto: "Perfecta para profesionales que necesitan captar clientes."
    }
  ];

  return (
    <>
      <section id="demo" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Título animado */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Demos y Ejemplos
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            Mira cómo podría verse tu página web. Todo se personaliza con tu estilo, colores y contenido.
          </motion.p>

          {/* Grid de demos */}
          <div className="grid gap-10 md:grid-cols-3">
            {demos.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => abrirModal(item)}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative w-full h-64 mb-6">
                  <div className="absolute inset-0 blur-2xl bg-blue-300 opacity-20 rounded-3xl"></div>

                  <Image
                    src={item.img}
                    alt={item.titulo}
                    fill
                    className="object-cover rounded-xl relative z-10 shadow-lg"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
                <p className="text-gray-600">{item.texto}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="inline-block mt-12 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg font-semibold hover:bg-blue-700 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            Quiero una web así ⭐
          </motion.a>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && selectedDemo && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cerrarModal}
          >
            <motion.div
              className="bg-white p-6 rounded-2xl max-w-3xl w-[90%] shadow-xl relative"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen grande */}
              <div className="relative w-full h-96 mb-5">
                <Image
                  src={selectedDemo.img}
                  alt={selectedDemo.titulo}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">{selectedDemo.titulo}</h3>
              <p className="text-gray-600 mb-4">{selectedDemo.texto}</p>

              <button
                onClick={cerrarModal}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
