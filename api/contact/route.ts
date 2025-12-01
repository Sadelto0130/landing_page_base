import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const post = async (req: Request) => {
  try {
    const { nombre, email, mensaje, plan } = await req.json();

    await fetch(
      `https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: process.env.WSP_RECEIVER,
          type: "text",
          text: {
            body: `
          Nuevo contacto desde la web:

          Nombre: ${nombre}
          Email: ${email}
          Plan elegido: ${plan}
          Mensaje: ${mensaje}
                      `,
          },
        }),
      }
    );

    await resend.emails.send({
      from: "No-Reply <no-reply@tuweb.com>",
      to: process.env.EMAIL_RECEIVER!,
      subject: `Nuevo lead - ${nombre}`,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre: </strong>${nombre}</p>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en contacto", error);
    return NextResponse.json({ ok: false, error: error }, { status: 500 });
  }
};
