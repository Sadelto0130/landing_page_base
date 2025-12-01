"use client"
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export const ContactSection = () => {
  const searchParams = useSearchParams();
  const planSeleccionado = searchParams.get("plan") || "";

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    plan: planSeleccionado
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, plan: planSeleccionado }));
  }, [planSeleccionado]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true)

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if(!res.ok) throw new Error(data.error || "error al enviar mensaje")

      alert("Mensaje enviado con éxito. Te contacto pronto")

      setForm({
        nombre: "",
        email: "",
        mensaje: "",
        plan: ""
      })
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema enviando el mensaje. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contáctame
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="font-semibold">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Correo</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Plan elegido</label>
            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Seleccionar plan</option>
              <option value="Landing Básica">Landing Básica</option>
              <option value="Landing Profesional">Landing Profesional</option>
              <option value="Landing Premium">Landing Premium</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border rounded-lg"
            ></textarea>
          </div>

          <button 
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-bold hover:bg-blue-700 transition">
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </motion.form>

      </div>
    </section>
  );
};
