import { FaRocket, FaMobileAlt, FaStar, FaTools, FaSearchDollar, FaShieldAlt } from "react-icons/fa"
import { motion } from "framer-motion"

export const ServicesSection = () => {
  const servicios = [
    {
      icon: FaRocket,
      titulo: "Lanzamiento Rápido",
      texto: "Creamos páginas veloces, optimizadas y listas para captar clientes"
    },
    {
      icon: FaMobileAlt,
      titulo: "100% Responsivas",
      texto: "Se ven perfectas en cualquier dispositivo sin perder estilo."
    },
    {
      icon: FaStar ,
      titulo: "Diseño Premium",
      texto: "Visual moderno, limpio y pensado para convertir."
    },    
    {
    icon: FaTools, 
    titulo: "Totalmente Personalizables",
    texto: "Tu página se adapta a tu estilo, marca y necesidades sin limitaciones."
  },
  {
    icon: FaSearchDollar,
    titulo: "Optimización SEO",
    texto: "Posicionamos tu página para que más clientes te encuentren en Google."
  },
  {
    icon: FaShieldAlt,
    titulo: "Seguras y Estables",
    texto: "Protegidas contra ataques, con alta disponibilidad y buen rendimiento."
  }
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          viewport={{once: false, amount: 0.3}}
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid gap-10 grid-cols-[repeat(auto-fit, minmax(260px,1fr))] md:grid-cols-3">
            {servicios.map((item, index) => {
              const Icono = item.icon 
              return (
                <motion.div
                  key={index} 
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
                  initial={{opacity: 0, y: 40}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{delay: index * 0.15, duration: 0.5}}
                  viewport={{once: false, amount: 0.2}}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.15)"
                  }}
                >
                  <Icono className="text-4xl mx-auto mb-4 text-indigo-600" />
                  <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
                  <p className="text-gray-600">{item.texto}</p>
                </motion.div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
