"use client";

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone:",
    description: "+91 8595637876",
  },
  {
    icon: <FaEnvelope />,
    title: "Email:",
    description: "muditgupta1711@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address:",
    description: "B-8, Balram Nagar, Loni, Ghaziabad, UP",
  },
];

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const Contact = () => {
  const handleclick = (e) => {
    e.preventDefault();
    alert("Form submitted Successfully");
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" py-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-3 p-8 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let,s Work Together</h3>
              <p className="text-white/60">
                Contact me to use my expertise for your next Website Building{" "}
                <br /> or Coding Projects
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* textarea */}
              <Textarea
                className="h-[80px]"
                placeholder="Type your message here!"
              ></Textarea>
              {/* button */}
              <Button
                className="xl:max-w-40 max-w-[200px]"
                onClick={handleclick}
              >
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-5">
              {info.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="w-[30px] h-[30px] xl:w-[42px] xl:h-[42px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="xl:text-[28px] text-[29px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="xl:flex xl:flex-row  gap-5">
                      <p className="text-white/60">{item.title}</p>
                      <h3>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
