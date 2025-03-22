"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Desarrollo de Aplicaciones Web y Móviles",
        description: "Desarrollo de aplicaciones web y móviles a medida con Flutter, HTML, CSS, JavaScript, Node.js, Spring Boot, Flask y bases de datos como MySQL y SQLite.",
        href: "", // Sugerencia: Ancla a la sección de proyectos web/móvil en tu portafolio
    },
    {
        num: "02",
        title: "Desarrollo de APIs RESTful",
        description: "Creación de APIs RESTful con Flask y Express para la gestión eficiente de datos y la comunicación entre sistemas.",
        href: "", // Sugerencia: Ancla a la sección de proyectos de API en tu portafolio
    },
    {
        num: "03",
        title: "Desarrollo de Soluciones de Gestión de Datos",
        description: "Diseño e implementación de bases de datos relacionales (MySQL, Postgres, SQLite) para la gestión y optimización de datos.",
        href: "", // Sugerencia: Ancla a la sección de habilidades de bases de datos
    },
    {
        num: "04",
        title: "Automatización de Tareas y Desarrollo de Scripts",
        description: "Desarrollo de scripts en Python para la automatización de tareas y la optimización de flujos de trabajo.",
        href: "", // Sugerencia: Ancla a la sección de habilidades de Python
    },
];
import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
            <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map((service, index) => {
                    return (<div key={index} className="flex-1 flex flex-col justify-center gap-6 group" >
                        {/* top */}
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline 
                            text-transparent group-hover:text-outline-hover transition-all
                            duration-500">
                                {service.num}
                            </div>
                            <Link href={service.href} className="w-[70px] h-[70px] rounded-full
                            bg-white group-hover:bg-accent transition-all duration-500 flex
                            justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl"/>
                            </Link>
                        </div>
                        {/* title */}
                        <h2 className="text-[42px] font-bold leading-none text-white
                        group-hover:text-accent transition-all duration-500">
                            {service.title}
                        </h2>
                        {/* description */}
                        <p className="text-white/60 ">
                            {service.description}
                        </p>
                        {/* border */}
                        <div className="border-b border-white/20 w-full"></div>
                    </div>
                );
            })}
            </motion.div>
            </div>
        </section>
    );
};

export default Services;
