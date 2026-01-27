import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <nav className="bg-amber-300">
        <div className="relative w-270 h-20 mx-auto flex items-center justify-between">
                <ul className="flex gap-4">
                  <li className="text-black  m-2 py-7 hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
                    <a href="#">payment</a> 
                    <div className="absolute bottom-0 w-full h-1  bg-blue-800 hidden group-hover:block transition-all duration-200"></div>
                  </li>
                  <li className=" text-black  m-2 py-7  hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
                     <a href="#">Banking</a>
                     <div className="absolute bottom-0 w-full h-1 bg-blue-800 hidden group-hover:block transition-all duration-200"></div>
                    </li>
                     <li className=" text-black  m-2 py-7  hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
                     <a href="#">Corporate card</a>
                     <div className="absolute bottom-0 w-full h-1 bg-blue-800 hidden group-hover:block transition-all duration-200"></div>
                    </li>
                     <li className=" text-black  m-2 py-7  hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
                     <a href="#">Payroll</a>
                     <div className="absolute bottom-0 w-full h-1 bg-blue-800 hidden group-hover:block transition-all duration-200"></div>
                    </li>
                     <li className=" text-black  m-2 py-7  hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
                     <a href="#">resources</a>
                     <div className="absolute bottom-0 w-full h-1 bg-blue-800 hidden group-hover:block transition-all duration-200"></div>
                    </li>
                     <li className=" text-black  m-2 py-7  hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
                     <a href="#">support</a>
                     <div className="absolute bottom-0 w-full h-1 bg-blue-800 hidden group-hover:block transition-all duration-200"></div>
                    </li>
                     <li className=" text-black  m-2 py-7  hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
                     <a href="#">pricing</a>
                     <div className="absolute bottom-0 w-full h-1 bg-blue-800 hidden group-hover:block transition-all duration-200"></div>
                    </li>
                
                </ul>

                <div className="flex space-x-6">
                      <img
                       src="https://cdn.pixabay.com/photo/2021/06/06/04/15/flag-6314251_1280.jpg"
                        width="28px"
                        height="1px" 
                      />
                      <button className="py-3 px-5 text-black border-r-yellow-950 border-2 rounded-2xl ">
                        Log in 
                      </button>
                      <button className="py-3 px-5 text-black bg-amber-50 rounded-2xl">
                        sign up
                      </button>
                      

                </div>
           
        </div>
      </nav>
    </>
  );
}

export default App;
