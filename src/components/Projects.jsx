import React from "react";
import Healthcare from "../assets/health-care.jpeg";
import TodoApp from "../assets/todo-app.png";
import TechNews from "../assets/tech-news.png";
import ATM from "../assets/atm.png";
import ActionRecog from "../assets/action-recog.png"
import Sentiment from "../assets/sentiment.png"
import Flappy from "../assets/flappy-bird.webp"

const Projects = () => {
  return (
    <div name="projects" className="text-gray-300 w-full md:h-auto pb-8">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-4"># Some of my projects</p>
        </div>

        {/* container for all projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Health care */}
          <a
            href="https://github.com/suzaankhan/Healthcare-Management-System.git"
            target="_blank"
            className="group"
          >
            <div
              name="card"
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto hover:scale-105 transition duration-300 cursor-pointer group"
            >
              <div className="relative group">
                <img src={Healthcare} className="rounded-t-md" alt="" />
                <div
                  className="w-full h-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 hidden group-hover:block text-gray-200
                font-bold group-hover:bg-blue-950 group-hover:bg-opacity-50 "
                >
                  <p className="text-center text-2xl mt-[20%]">Click to view</p>
                </div>
              </div>
              {/* Hover effect */}
              <div className="p-2">
                <span className="text-gray-200 text-xl ">
                  Health Record Management System (onGoing)
                </span>
                <div className="w-full border-t-1 my-1 opacity-50"></div>
                <div className="">Java | React | Express | Firebase</div>
              </div>
            </div>
          </a>

          {/* Todo */}
          <a
            href="https://github.com/suzaankhan/Todo-App.git"
            target="_blank"
            className="group"
          >
            <div
              name="card"
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col mx-auto hover:scale-105 transition duration-300 cursor-pointer group"
            >
              <div className="relative group">
                <img src={TodoApp} className="rounded-t-md" alt="" />
                <div
                  className="w-full h-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 hidden group-hover:block text-gray-200
                font-bold group-hover:bg-blue-950 group-hover:bg-opacity-50 "
                >
                  <p className="text-center text-2xl mt-[20%]">Click to view</p>
                </div>
              </div>
              {/* Hover effect */}
              <div className="p-2 h-24">
                <span className="text-gray-200 text-xl ">Todo App</span>
                <div className="w-full border-t-1 my-1 opacity-50"></div>
                <div className="">React | MongoDb | Express | REST APi</div>
              </div>
            </div>
          </a>

          {/* tech news website */}
          <a
            href="https://github.com/suzaankhan/Tech-News-Website.git"
            target="_blank"
            className="group"
          >
            <div
              name="card"
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col mx-auto hover:scale-105 transition duration-300 cursor-pointer group"
            >
              <div className="relative group">
                <img src={TechNews} className="rounded-t-md" alt="" />
                <div
                  className="w-full h-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 hidden group-hover:block text-gray-200
                font-bold group-hover:bg-blue-950 group-hover:bg-opacity-50 "
                >
                  <p className="text-center text-2xl mt-[20%]">Click to view</p>
                </div>
              </div>
              {/* Hover effect */}
              <div className="p-2">
                <span className="text-gray-200 text-xl ">
                  Tech news website
                </span>
                <div className="w-full border-t-1 my-1 opacity-50"></div>
                <div className="">React | fetchAPI | Pagination | Search </div>
              </div>
            </div>
          </a>

          {/* ATM system */}
          <a
            href="https://github.com/suzaankhan/ATM-System-with-Face-recognition-and-liveness-detection.git"
            target="_blank"
            className="group"
          >
            <div
              name="card"
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col mx-auto hover:scale-105 transition duration-300 cursor-pointer group"
            >
              <div className="relative group">
                <img src={ATM} className="rounded-t-md" alt="" />
                <div
                  className="w-full h-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 hidden group-hover:block text-gray-200
                font-bold group-hover:bg-blue-950 group-hover:bg-opacity-50 "
                >
                  <p className="text-center text-2xl mt-[20%]">Click to view</p>
                </div>
              </div>
              {/* Hover effect */}
              <div className="p-2">
                <span className="text-gray-200 text-xl ">
                  ATM System with Face Recognition
                </span>
                <div className="w-full border-t-1 my-1 opacity-50"></div>
                <div className="">Python | Tkinter | ML | openpyxl</div>
              </div>
            </div>
          </a>

            {/* Action recpgntion */}
          <a
            href="https://github.com/suzaankhan/Action-Recognition-using-LSTM.git"
            target="_blank"
            className="group"
          >
            <div
              name="card"
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col mx-auto hover:scale-105 transition duration-300 cursor-pointer group"
            >
              <div className="relative group">
                <img src={ActionRecog} className="rounded-t-md" alt="" />
                <div
                  className="w-full h-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 hidden group-hover:block text-gray-200
                font-bold group-hover:bg-blue-950 group-hover:bg-opacity-50 "
                >
                  <p className="text-center text-2xl mt-[20%]">Click to view</p>
                </div>
              </div>
              {/* Hover effect */}
              <div className="p-2">
                <span className="text-gray-200 text-xl ">
                  Action Recognition using LSTM
                </span>
                <div className="w-full border-t-1 my-1 opacity-50"></div>
                <div className="">Python | Tensorflow | Mediapipe | Opencv</div>
              </div>
            </div>
          </a>


          {/* Sentiment analysis */}
          <a
            href="https://github.com/suzaankhan/Product-Reviews-Sentiment-Analysis.git"
            target="_blank"
            className="group"
          >
            <div
              name="card"
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col mx-auto hover:scale-105 transition duration-300 cursor-pointer group"
            >
              <div className="relative group">
                <img src={Sentiment} className="rounded-t-md" alt="" />
                <div
                  className="w-full h-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 hidden group-hover:block text-gray-200
                font-bold group-hover:bg-blue-950 group-hover:bg-opacity-50 "
                >
                  <p className="text-center text-2xl mt-[20%]">Click to view</p>
                </div>
              </div>
              {/* Hover effect */}
              <div className="p-2">
                <span className="text-gray-200 text-xl ">
                  Product reviews Sentiment Analysis
                </span>
                <div className="w-full border-t-1 my-1 opacity-50"></div>
                <div className="">Python | BERT | Flask</div>
              </div>
            </div>
          </a>

          {/* Flappy bird */}
          <a
            href="https://github.com/suzaankhan/Flappy-Bird-Game.git"
            target="_blank"
            className="group"
          >
            <div
              name="card"
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col mx-auto hover:scale-105 transition duration-300 cursor-pointer group"
            >
              <div className="relative group">
                <img src={Flappy} className="rounded-t-md" alt="" />
                <div
                  className="w-full h-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 hidden group-hover:block text-gray-200
                font-bold group-hover:bg-blue-950 group-hover:bg-opacity-50 "
                >
                  <p className="text-center text-2xl mt-[20%]">Click to view</p>
                </div>
              </div>
              {/* Hover effect */}
              <div className="p-2">
                <span className="text-gray-200 text-xl ">
                  Flappy Bird Game
                </span>
                <div className="w-full border-t-1 my-1 opacity-50"></div>
                <div className="">Python | Pygame</div>
              </div>
            </div>
          </a>


        </div>
        <div className="flex justify-end">
        <a href="https://github.com/suzaankhan"
        target="_blank"
        className="py-4 hover:text-white">
          Visit Github
        </a>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
