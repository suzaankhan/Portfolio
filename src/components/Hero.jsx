import React from "react";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
// h-[720px]
const Hero = () => {
  return (
    <div name="home" className="mt-12 max-w-full  h-screen relative flex items-center justify-between">
      <div className=" text-white flex flex-col md:block hidden">
        <ul className="">
          <li className="flex w-full">
            <a
              href="https://www.linkedin.com/in/suzaan-khan-41b044208/"
              target="_blank"
              className="flex gap-x-4 justify-between -ml-[95px]
                    p-2 text-xl bg-blue-600 z-10  hover:translate-x-[95px] transition duration-300"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex w-full">
            <a
              href="https://github.com/suzaankhan"
              target="_blank"
              className="flex gap-x-4 justify-between flex-1 -ml-[95px]
                    p-2 text-xl bg-[#333333] z-10  hover:translate-x-[95px] transition duration-300"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="flex w-full">
            <a
              href="mailto:suzaankhan1803.sk@gmail.com"
              className="flex gap-x-4 justify-between flex-1 -ml-[95px]
                    p-2 text-xl bg-green-400 z-10  hover:translate-x-[95px] transition duration-300"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-white md:px-[15%] px-4 z-30">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }} // 1 second
        >
          <TypeAnimation
            sequence={[
              "Web Development",
              1000,
              "Machine Learning",
              1000,
              "Learner",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }} // 1 second
            className="text-gray-200 text-5xl md:text-7xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-pink-500">SUZAAN KHAN</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }} // 1 second
            className="text-gray-200 text-lg md:text-2xl mb-6"
          >
            Passionate about software development and machine learning.
            Continuously eager to learn and explore new technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <button className="group z-50 cursor-pointer
            transition text-gray-100 md:w-auto font-thin border px-3 py-1.5 flex items-center gap-x-3 hover:bg-pink-500   duration-300">
              View Work <HiArrowNarrowRight className="group-hover:rotate-90 transition duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>


        <div className="absolute inset-0 md:block overflow-hidden">
        <ShinyEffect left={600} top={-50} size={1400} />
        </div>

    </div>
  );
};

export default Hero;
