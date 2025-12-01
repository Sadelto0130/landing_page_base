import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const PriceSection = () => {
  const router = useRouter()

  const handleSelection = (plan: string) => {
    router.push(`/?plan=${encodeURIComponent(plan)}#contact`)
  }

  const planes = [
    {
      titulo: "Landing Básica",
      precio: "USD 80",
      descripcion: "Ideal para emprendedores que quieren presencia inmediata.",
      features: [
        "1 Sección principal + contacto",
        "Diseño responsive completo",
        "Conexión a WhatsApp",
        "Optimización de carga",
      ]
    },
    {
      titulo: "Landing Profesional",
      precio: "USD 120",
      descripcion: "Perfecta para negocios que necesitan destacar con estilo.",
      popular: true,
      features: [
        "Hasta 5 secciones",
        "Diseño más personalizado",
        "Integración de formularios",
        "SEO básico",
        "Animaciones y microinteracciones",
      ]
    },
    {
      titulo: "Landing Premium",
      precio: "USD 180",
      descripcion: "Para marcas que quieren impacto visual y funciones avanzadas.",
      features: [
        "Diseño totalmente personalizado",
        "Integración de pagos o reservas",
        "SEO avanzado",
        "Panel administrativo (opcional)",
        "Animaciones Pro + secciones extra",
      ]
    }
  ];

  return (
    <section id="precios" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Título */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Precios Claros, Resultados Reales
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Escoge el plan que mejor se adapte a tu proyecto. Sin sorpresas ni costos ocultos.
        </motion.p>

        {/* Grid de planes */}
        <div className="grid gap-10 md:grid-cols-3">

          {planes.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 shadow-lg border transition relative ${
                plan.popular 
                  ? "bg-blue-600 text-white shadow-blue-300 scale-105" 
                  : "bg-gray-50"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.04 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold shadow">
                  Más elegido ⭐
                </div>
              )}

              <h3 className="text-2xl font-semibold mb-3">{plan.titulo}</h3>
              <p className="text-xl font-bold mb-4">{plan.precio}</p>
              <p className={`mb-6 ${plan.popular ? "text-blue-100" : "text-gray-600"}`}>
                {plan.descripcion}
              </p>

              <ul className="space-y-3 text-left">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className={`text-green-500 ${plan.popular && "!text-white"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelection(plan.titulo)}
                className={`block mt-8 w-full py-3 rounded-lg font-bold transition ${
                  plan.popular
                    ? "bg-white text-blue-700 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Elegir este plan
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
