"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
    title: "Acerca de mí",
    description:
    "Estudiante de Ingeniería en Software con experiencia en desarrollo web y móvil. Analítico, autodidacta, y apasionado por la optimización de sistemas.",
    info: [
        {
            fieldName: "Nombre",
            fieldValue: "Mateo Pilco"
        },
        {
            fieldName: "Teléfono",
            fieldValue: "(+593) 0995291560"
        },
        {
            fieldName: "Experiencia",
            fieldValue: "1+ Años"
        },
        {
            fieldName: "GitHub",
            fieldValue: "SebasPM15"
        },
        {
            fieldName: "Nacionalidad",
            fieldValue: "Ecuatoriano"
        },
        {
            fieldName: "Email",
            fieldValue: "mateo.pilco.dev@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Disponible"
        },
        {
            fieldName: "Idiomas",
            fieldValue: "Español, Inglés (Intermedio - Avanzado)"
        }
    ]
}

//experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: "Mi experiencia",
    description:
    "Experiencia en desarrollo backend, APIs RESTful, gestión de datos y automatización.",
    items: [
        {
            company: "INCLUSIÓN DIGITAL - EPN",
            position: "Tutor Virtual",
            duration: "Marzo 2024 - Agosto 2024",
            details: [
                "Capacitación Docente: Formación de docentes del Ministerio de Educación en herramientas TIC para potenciar su enseñanza.",
                "Innovación Educativa: Implementación de tecnologías digitales para mejorar metodologías de aprendizaje en línea.",
                "Habilidades Desarrolladas: Comunicación efectiva, pedagogía digital y adaptación a plataformas tecnológicas."
            ]
        },
        {
            company: "Preventec S.A.S.",
            position: "Pasante de Programador",
            duration: "Febrero 2025 - Marzo 2025",
            details: [ // Agregado: Detalles de la pasantía
                "Pasantía de 120 horas"
            ]
        }
    ]
}

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: "Mi educación",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    items: [
        {
            institution: "Instituto Nacional Mejía",
            degree: "Bachiller en Ciencias",
            duration: "2014 - 2020",
        },
        {
            institution: "Instituto Nacional Mejía",
            degree: "Bachiller Internacional",
            duration: "2018 - 2020"
        },
        {
            institution: "Escuela Politécnica Nacional",
            degree: "Ingeniería en Software (En curso)",
            duration: "2020 - Actualmente"
        }
    ]
}

//skills data
const skills = {
    title: "Mis habilidades",
    description:
    "Habilidades en desarrollo web, móvil, backend, bases de datos y herramientas de desarrollo.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
    return <motion.div
    initial={{opacity:0}}
    animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 
                gap-6">
                    <TabsTrigger value="experience">Experiencia</TabsTrigger>
                    <TabsTrigger value="education">Educación</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">Acerca de mí</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6
                                        px-10 rounded-xl flex flex-col justify-center items-center lg:items-start
                                        gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px]
                                            text-center lg:text-left">
                                                {item.position}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    
                    {/* education */}
                    <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6
                                        px-10 rounded-xl flex flex-col justify-center items-center lg:items-start
                                        gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px]
                                            text-center lg:text-left">
                                                {item.degree}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                {/* dot */}
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* skills */}
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold ">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {skills.description}
                                </p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                                {skills.skillList.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px]
                                                    bg-[#232329] rounded-xl flex justify-center items-center
                                                    group">
                                                        <div className="text-6xl group-hover:text-accent
                                                        transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>

                    {/* about */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {about.description}
                            </p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                            mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center justify-center
                                        xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>                                        
                </div>
            </Tabs>
        </div>
    </motion.div>;
};

export default Resume;
