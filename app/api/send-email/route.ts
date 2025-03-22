import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Configurar transporter (para Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "mateo.pilco.dev@gmail.com",
      subject: `Nuevo mensaje de ${formData.firstname} ${formData.lastname}`,
      html: `
        <h3>Detalles del contacto:</h3>
        <ul>
          <li>Nombre: ${formData.firstname} ${formData.lastname}</li>
          <li>Email: ${formData.email}</li>
          <li>Teléfono: ${formData.phone}</li>
          <li>Servicio: ${formData.service}</li>
        </ul>
        <h3>Mensaje:</h3>
        <p>${formData.message}</p>
      `,
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Correo enviado" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
