import React from "react";
import { motion } from "framer-motion";
import Royal from "../assets/royal-college.jpg";
import HolyCross from "../assets/holy-cross.jpg";
import SabooSiddik from '../assets/saboo1.jpg';

const About = () => {
  return (
    <div name="education"
      className="w-full md:h-auto h-screen text-gray-300 ">
      <div className="max-w-[1000px] mx-auto h-full flex flex-col p-4">
        <div 
          className="w-full items-center flex font-bold  py-10"
        >
          <h1 className="border-b-4 text-4xl border-pink-600">Education</h1>
        </div >

        <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount : 1.0 }}
        transition={{ duration: 0.7, ease : 'easeInOut'}}
        className="w-full flex py-5 md:justify-end">

        <div className=" md:w-1/2 flex items-center justify-center">
            <img src={HolyCross} alt="" className="w-80 rounded hidden md:block" />
        </div>
          <div className="flex flex-col md:w-1/2">
            <div>
              <h3 className="border-pink-600 pb-1 md:text-3xl text-2xl border-b-2 inline-block">
                Secondary Education  (2018-2019)
              </h3>
            </div>
            <p className="md:text-2xl text-xl pt-2 ">
              Holy Cross Convent School, Mira Road East
            </p>
          </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true}}
        transition={{ duration: 0.7, ease : 'easeInOut'}} className="w-full flex py-5 justify-start">
          <div className="flex flex-col md:w-1/2">
            <div>
              <h3 className="border-pink-600 pb-1 md:text-3xl text-2xl border-b-2 inline-block">
                Higher Secondary Education (2019-2021)
              </h3>
            </div>
            <p className="md:text-2xl text-xl pt-2">
                Royal College of Arts, Science and Commerce, Mira Road East
            </p>
          </div>
          <div className=" md:w-1/2 flex items-center justify-center">
            <img src={Royal} alt="" className="w-80 rounded hidden md:block" />
          </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, }}
        transition={{ duration: 0.7, ease : 'easeInOut'}} className="w-full flex text-3xl py-5 md:justify-end">
        <div className=" md:w-1/2 flex items-center justify-center">
            <img src={SabooSiddik} alt="" className="w-80 rounded hidden md:block" />
          </div>
          <div className="flex flex-col md:w-1/2">
            <div>
              <h3 className="border-pink-600 pb-1 md:text-3xl text-2xl border-b-2 inline-block">
                B.E. Computer Science and Engineering (AIML) (2021-2025)
              </h3>
            </div>
            <p className="md:text-2xl text-xl pt-2">
                M.H. Saboo Siddik College of Engineering, Byculla, Mumbai
            </p>
          </div>
        </motion.div>

      </div>
    </div>
    
  );
};

export default About;
