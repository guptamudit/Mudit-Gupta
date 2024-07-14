"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "GET HIRED",
    title: "Project 1",
    description:
      "Developed a Completely working Job Portal created using MERN, Tailwind CSS, with all the necessary functionalities and mobile responsiveness.",
    stack: [
      { name: "React" },
      { name: "NodeJs" },
      { name: "ExpressJs" },
      { name: "MongoDb" },
    ],
    image: "/assets/projects/GetHired.png",
    live: "",
    github: "https://github.com/guptamudit/GetHired",
  },
  {
    num: "01",
    category: "RESUME BUILDER",
    title: "Project 2",
    description:
      "Designed and developed a dynamic and user-friendly resume builder web application using React, providing individuals with an intuitive platform to create professional resumes effortlessly. Users have the convenience of effortlessly generating and downloading their Resume/CV in a polished PDF format.",
    stack: [
      { name: "JavaScript" },
      { name: "ReactJS" },
      { name: "CSS Modules" },
    ],
    image: "/assets/projects/ResumeBuild.png",
    live: "resume-builder-app-react.netlify.app",
    github: "https://github.com/guptamudit/Resume-Builder",
  },
  {
    num: "01",
    category: "TWO-GOOD COMPANY",
    title: "Project 3",
    description:
      "Two Good Company. A cool animated website made using the power of GsapJs. **This is a clone of the official website**",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "GSap" },
    ],
    image: "/assets/projects/Two-Good.png",
    live: "two-good-com.netlify.app/",
    github: "https://github.com/guptamudit/Two-good-company",
  },
  {
    num: "01",
    category: "LIVE WHITEBOARD SHARING",
    title: "Project 4",
    description:
      "I Created a live Whiteboard sharing web application to encourage Realtime learning and collaboration between teachers and students.",
    stack: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "NodeJs" },
      { name: "BootStrap" },
    ],
    image: "/assets/projects/WhiteBoard.png",
    live: "live-white-board-sharing.vercel.app",
    github: "https://github.com/guptamudit/Live-WhiteBoard-Sharing",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        // transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px]  flex flex-col xl:justify-between  order-2 xl:order-none">
            <div>
              {/* outline number */}
              <div className="text-8xl leading-none font-bold text-trasnsparent text-outline 	">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">Area</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
