"use client";   

import { Info } from "lucide-react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaNode, FaNodeJs, FaFigma} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs} from "react-icons/si";

// about data
const about = {
    title: "About Me",
    description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque quasi autem quas, similique ipsam odio dolore.",
    info: [
        {
            fildName: "Name",
            fildValue: "Armin Alborzi",
        },
        {
            fildName: "Phone",
            fildValue: "(+98) 9374816440",
        },
        {
            fildName: "Experience",
            fildValue: "14+ Years",
        },
        {
            fildName: "Skype",
            fildValue: "rmin.alborzi",
        },
        {
            fildName: "Nationality",
            fildValue: "Iranian",
        },
        {
            fildName: "Email",
            fildValue: "rmin.alborzi@gmail.com",
        },
        {
            fildName: "Freelance",
            fildValue: "Available",
        },
        {
            fildName: "Languages",
            fildValue: "English, Persian",
        },
    ]
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg", // TO DO  . . .
    title: "My experience",
    description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque quasi autem quas, similique ipsam odio dolore.",
    items: [
        {
            company: " A - Company Name",
            position: "Position Name",
            duration: "2014 - 2018",
        },
        {
            company: " B - Company Name",
            position: "Position Name",
            duration: "2018 - 2020",
        },
        {
            company: " C - Company Name",
            position: "Position Name",
            duration: "2020 - 2021",
        },
        {
            company: " D - Company Name",
            position: "Position Name",
            duration: "2022 - 2023",
        },
        {
            company: " E - Company Name",
            position: "Position Name",
            duration: "2023 - Present",
        },
    ],
};

// education data
const education = {
    icon: "/assets/resume/cap.svg", // TO DO  . . .
    title: "My education",
    description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque quasi autem quas, similique ipsam odio dolore.",
    items: [
        {
            institution: " A - institution Name",
            degree: "Expert in Computer Science",
            duration: "2009",
        },
        {
            institution: " B - institution Name",
            degree: "bachor in Computer Science",
            duration: "2010",
        },
        {
            institution: " C - institution Name",
            degree: "data science",
            duration: "2013",
        },
        {
            institution: " D - institution Name",
            degree: "network engineering",
            duration: "2019",
        },
        {
            institution: " E - institution Name",
            degree: "cyber security",
            duration: "2023",
        },
        {
            institution: " F - institution Name",
            degree: "hacker",
            duration: "2023",
        },
        {
            institution: " G - institution Name",
            degree: "Developer",
            duration: "2024",
        },
    ],
};

// skills data
const skills = {
    title: "My skills",
    description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque quasi autem quas, similique ipsam odio dolore.",
    skilllList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
    ],
};

import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger
} from "@/components/ui/tabs";

import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1, 
                transition: { delay : 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience" 
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className="min=h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold " >{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index)=> {
                                            return (
                                                <li 
                                                    key={index} 
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent ">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
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
                                <h3 className="text-4xl font-bold " >{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index)=> {
                                            return (
                                                <li 
                                                    key={index} 
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent ">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
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
                            <div className="flex flex-col gap-[30px] ">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                                    <h3 className="text-4xl text-bold ">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skilllList.map((skill, index)=> {
                                        return (
                                            <li key={index}>
                                                {/* delay for show alt-name */}
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            {/* skills icon */}
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            {/* skills alt-name */}
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>


                        
                        {/* about */}
                        <TabsContent 
                            value="about" 
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                {/* about title and descreption*/}
                                <h3 className="text-4xl font-bold ">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index)=> {
                                        {/* edit personal details like name,phone,address and etc.*/}
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fildName}</span>
                                                <span className="text-xl">{item.fildValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume; 