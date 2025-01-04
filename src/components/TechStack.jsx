import React from 'react'

import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png"
import Java from "../assets/java.png"
import Python from "../assets/python.png"
import Css from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";
import ReactImg from "../assets/react.png";
import MongoDb from "../assets/mongo.png";
import Express from "../assets/express.png";
import ML from "../assets/machine-learning.png";
import Git from "../assets/git.png"
import SQL from "../assets/sql.png";
import RestAPI from "../assets/api.png";

const TechStack = () => {
  return (
    <div name="techstack" className='text-gray-300 w-full h-auto'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>TechStack</p>
          <p className='py-4'># Below are some technologies i have experience with</p>
        </div>

        <div className='w-full gap-4 grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
            <div className='card'>
              <img src={Html} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>HTML</p>
            </div>
            <div className='card'>
              <img src={Css} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>CSS</p>
            </div>
            <div className='card'>
              <img src={Javascript} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>JAVASCRIPT</p>
            </div>
            <div className='card'>
              <img src={Python} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>PYTHON</p>
            </div>
            <div className='card'>
              <img src={Java} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>JAVA</p>
            </div>
            <div className='card'>
              <img src={ReactImg} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>REACT</p>
            </div>
            <div className='card'>
              <img src={Express} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>EXPRESS</p>
            </div>
            <div className='card'>
              <img src={MongoDb} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>MONGODB</p>
            </div>
            <div className='card'>
              <img src={Tailwind} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>TAILWIND</p>
            </div>
            <div className='card'>
              <img src={ML} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>MACHINE LEARNING</p>
            </div>
            <div className='card'>
              <img src={RestAPI} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>REST API</p>
            </div>
            <div className='card'>
              <img src={Git} alt="HTML icon" className='w-20 mx-auto'/>
              <p className='py-4'>GIT</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default TechStack
