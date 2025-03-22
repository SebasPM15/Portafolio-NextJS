"use client";

import { motion } from "framer-motion";
import  React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Portafolio Personal",
        description:
        "Desarrollo de portafolio personal utilizando Next.js y Tailwind CSS.",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
        image: "/assets/work/portafolio.png",
        live: "",
        github: "https://github.com/SebasPM15/Portafolio-NextJS",
    },
    {
        num: "02",
        category: "fullstack",
        title: "Aplicación Bancaria para Proceso de Pasantía",
        description:
        "Desarrollo de una aplicación bancaria con .NET 9.0 en el backend y Angular 17 en el frontend, integrando autenticación JWT y SQL Server en Docker.",
        stack: [
            { name: ".NET 9.0" },
            { name: "Entity Framework Core" },
            { name: "Angular 17" },
            { name: "SQL Server" },
            { name: "Docker" },
            { name: "JWT" },
            { name: "Swagger" },
            { name: "Postman" },
            { name: "Angular Material" },
            { name: "Bootstrap" },
            { name: "NgxToastr" }
        ],
        image: "/assets/work/noImage.png",
        live: "",
        github: "https://github.com/MateoPm15/banco-app-pasantia"
    },
    {
        num: "03",
        category: "fullstack",
        title: "Aplicación Web de Gestión Financiera Personal",
        description:
        "Plataforma para gestionar ingresos, gastos y transferencias con backend en Spring Boot y base de datos en MySQL.",
        stack: [
            { name: "Java" },
            { name: "Spring Boot" },
            { name: "MySQL" },
            { name: "JSP" }
        ],
        image: "/assets/work/noImage.png",
        live: "",
        github: "https://github.com/SebasPM15/Aplicacion-Web-de-Gestion-Financiera-Personal",
    },
    {
        num: "04",
        category: "mobile",
        title: "Aplicación Móvil - Lista de Tareas (Agenda Estudiantil)",
        description:
        "Aplicación Android para la gestión de tareas con integración de Google Maps y almacenamiento offline en SQLite.",
        stack: [
            { name: "Kotlin" },
            { name: "Jetpack Compose" },
            { name: "SQLite" },
            { name: "Google Maps API" },
            { name: "Material Design" }
        ],
        image: "/assets/work/noImage.png",
        live: "",
        github: "https://github.com/SebasPM15/App-Lista-Tareas",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper: SwiperType) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex])
    }
    return (
        <motion.section
            initial={{opacity:0}}
            animate={{opacity:1, transition: {delay:2.4, duration: 0.4, ease:"easeIn" },
        }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                    xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]:">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent
                            text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white
                            group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            <h3>Título: {project.title}</h3>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex flex-wrap gap-x-4 gap-y-2">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl
                                                group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl
                                                group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub repositorio</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>                            
                            </div>                            
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center
                                        items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10
                                            z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                src={project.image}
                                                fill
                                                className="object-cover"
                                                alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/*  slider buttons */}
                            <WorkSliderBtns 
                            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                            xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                            w-[44px] h-[44px] flex justify-center items-center transition-all"
                            iconsStyles="text-white text-2xl"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;