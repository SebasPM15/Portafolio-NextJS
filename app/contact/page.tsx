"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Teléfono",
        description: "(+593) 0995291560"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "mateo.pilco.dev@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Dirección",
        description: "San José de Monjas Alto"
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Error en la respuesta del servidor");
            }

            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                service: "",
                message: ""
            });

            alert("Mensaje enviado con éxito");

        } catch (error) {
            console.error("Error al enviar el mensaje", error);
            alert("Hubo un error al enviar el mensaje");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Trabajemos juntos!</h3>
                            <p className="text-white/60">
                                ¿Tienes un proyecto en mente? Contáctame y hablemos sobre cómo puedo ayudarte a hacerlo realidad.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Nombre" value={formData.firstname} onChange={handleChange} required />
                                <Input type="text" name="lastname" placeholder="Apellido" value={formData.lastname} onChange={handleChange} required />
                                <Input type="email" name="email" placeholder="Dirección Email" value={formData.email} onChange={handleChange} required />
                                <Input type="text" name="phone" placeholder="Teléfono celular" value={formData.phone} onChange={handleChange} required />
                            </div>
                            {/* select */}
                            <Select name="service" value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Escoja un servicio" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecciona un servicio</SelectLabel>
                                        <SelectItem value="desarrollo_web_movil">Desarrollo Web y Móvil</SelectItem>
                                        <SelectItem value="desarrollo_apis_restful">Desarrollo de APIs RESTful</SelectItem>
                                        <SelectItem value="gestion_datos">Desarrollo de Soluciones de Gestión de Datos</SelectItem>
                                        <SelectItem value="automatizacion_scripts">Automatización de Tareas y Desarrollo de Scripts</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* text area */}
                            <Textarea
                                className="h-[200px]"
                                name="message"
                                placeholder="Escribe tu mensaje aquí."
                                value={formData.message}
                                onChange={handleChange} required />
                            {/* btn */}
                            <Button type="submit" size="md" className="max-w-40">Enviar mensaje</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 
                    xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                                        text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;