"use client";

import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { DiMysql } from "react-icons/di";
import { TfiMicrosoftAlt } from "react-icons/tfi";

const about = {
  title: "About Me",
  description:
    "A Passionate B-tech student, constantly seeking new opportunities to grow and contribute in tech field. My aim is to acquire new skills to make up with the constantly growing market. I'm excited to connect with like-minded individuals and collaborate on projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mudit Gupta",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 8595637876",
    },
    {
      fieldName: "Email",
      fieldValue: "muditgupta1711@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
    {
      fieldName: "Availability",
      fieldValue: "Avialabe to Work",
    },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "I have a project building experience of 3 months with multiple training module completions .",
  items: [
    {
      company: "Intrainz",
      positon: "WEB DEVELOPER",
      duration: "Nov.2023 - Jan.2024",
    },
    {
      company: "IBM SkillBuild",
      positon: "FRONT END WEB DEVELOPER",
      duration: "July.2024 - Present",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "I am currently an UnderGrad Student learning Computer Sciences in my University. I also learn using Online Courses.",
  items: [
    {
      institution: "Salwan Public School",
      degree: "Class X ",
      duration: "2018 - 2019",
    },
    {
      institution: "Salwan Public School",
      degree: "Class XII ",
      duration: "2020 - 2021",
    },
    {
      institution: "Maharaja Agrasen Institute of Technology",
      degree: "Computer Science Engineering UnderGrad",
      duration: "2021 - 2025",
    },
    {
      institution: "Udemy",
      degree: "Full Stack Web Development",
      duration: "July.2023 - Sept.2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "These are my skills i learned and mastered throught my learning phase.",
  skillList: [
    {
      icon: <TbBrandCpp />,
      name: "cpp",
    },
    {
      icon: <IoLogoJavascript />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaHtml5 />,
      name: "html",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <BsFiletypeSql />,
      name: "sql",
    },
    {
      icon: <DiMysql />,
      name: "mysql",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <FaReact />,
      name: "reactjs",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <SiExpress />,
      name: "expressjs",
    },
    {
      icon: <TbBrandNextjs />,
      name: "nextjs",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <TbBrandTailwind />,
      name: "tailwind",
    },
    {
      icon: <FaGithub />,
      name: "git",
    },
    {
      icon: <TfiMicrosoftAlt />,
      name: "msoffice",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { easeIn, easeInOut, motion } from "framer-motion";
import { Item } from "@radix-ui/react-select";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] xl:mt-3 xl:ml-5 flex items-center justify-center py-12 xl:py-0"
    >
      <div className="conatainer mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[30px]"
        >
          <TabsList className="flex flex-col  w-[380px] xl:w-[520px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
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
                <div className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start "
                        >
                          <span className="text-accent ">{item.positon}</span>
                          <p className="text-sm">{item.duration}</p>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <h3 className="text-white">{item.company}</h3>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <div className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[140px] lg:w-[350px] py-6 px-5 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent ">
                            {item.institution}
                          </span>
                          <p className="text-sm">{item.degree}</p>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <h3 className="text-white">{item.duration}</h3>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[30px]  ">
                    {skills.skillList.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={80}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left "
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1  xl:grid-cols-2 gap-y-6 max-w-[720px] max-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">
                          {item.fieldName}{" "}
                          <span className="text-accent">:</span>
                        </span>
                        <span className="">{item.fieldValue}</span>
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
