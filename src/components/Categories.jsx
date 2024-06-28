import React, { useState, useEffect } from "react";

export default function Categories() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`w-full ${windowWidth <= 890 ? ' h-[160%]' : windowWidth <= 1680 ? ' h-[90%]' : 'h-[80%]'} bg-neutral-900 flex justify-center items-start overflow-y overflow-x-hidden`}>
      <div className="mt-12">
        <div className={`grid gap-4 ${windowWidth <= 890 ? 'grid-cols-1' : windowWidth <= 1680 ? 'grid-cols-2 ' : 'grid-cols-4'} justify-center items-center`}>

          <div className="bg-gray-800 w-[400px] h-[320px] rounded-xl overflow-hidden">
            <div className="bg-gray-700 w-full h-[70px] rounded-t-xl flex justify-center items-center">
              <h1 className="font-bold text-xl text-white">Minecraft</h1>
            </div>   

            <div className="bg-gray-700 w-[90%] h-[220px] mt-3 mb-3 flex justify-center items-center mx-auto rounded-l ">
              <h1 className="font-bold text-xl text-white">Posts</h1>
            </div>

          </div>

          <div className="bg-gray-800 w-[400px] h-[320px] rounded-xl overflow-hidden">
            <div className="bg-gray-700 w-full h-[70px] rounded-t-xl flex justify-center items-center">
              <h1 className="font-bold text-xl text-white">Webhost</h1>
            </div>
            
            <div className="bg-gray-700 w-[90%] h-[220px] mt-3 mb-3 flex justify-center items-center mx-auto rounded-l ">
              <h1 className="font-bold text-xl text-white">Posts</h1>
            </div>

          </div>

          <div className="bg-gray-800 w-[400px] h-[320px] rounded-xl overflow-hidden">
            <div className="bg-gray-700 w-full h-[70px] rounded-t-xl flex justify-center items-center">
              <h1 className="font-bold text-xl text-white">Databáze</h1>
            </div>

            <div className="bg-gray-700 w-[90%] h-[220px] mt-3 mb-3 flex justify-center items-center mx-auto rounded-l ">
              <h1 className="font-bold text-xl text-white">Posts</h1>
            </div>

          </div>
      
          <div className="bg-gray-800 w-[400px] h-[320px] rounded-xl overflow-hidden">
            <div className="bg-gray-700 w-full h-[70px] rounded-t-xl flex justify-center items-center">
              <h1 className="font-bold text-xl text-white">Již brzy</h1>
            </div>

            <div className="bg-gray-700 w-[90%] h-[220px] mt-3 mb-3 flex justify-center items-center mx-auto rounded-l ">
              <h1 className="font-bold text-xl text-white">Posts</h1>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
