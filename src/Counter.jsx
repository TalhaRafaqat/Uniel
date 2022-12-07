import React from "react";

export default class Counter extends React.Component {
  render() {
    return (
      <>
        <section className="body-font">
          <div>
            <h1 className="font-bold lg:text-5xl md:text-5xl sm:text-4xl text-3xl pl-20 pt-24">
              Key Facts
            </h1>
          </div>
          <div className="container px-24 py-24 mx-auto">

            <div className="flex flex-wrap -m-20 pl-10 text-center">
              <div className=" sm:w-1/4 w-1/2">
                <h2 className="lg:text-9xl md:text-9xl sm:text-8xl text-8xl  title-font font-bold  text-red-600">75</h2>
                <div className=" h-1 w-10 mb-5 bg-black ml-10"></div>
                <p className="font-bold lg:text-2xl md:text-2xl sm:text-xl text-md">
                  SUCCESSFUL PROJECTS</p>
              </div>


              <div className="flex justify-between flex-col items-center w-9/12">
                <div className="flex justify-start items-center h-28 w-9/12 font-bold lg:text-3xl md:text-2xl sm:text-2xl ">
                  <h1 className="flex ">Designed For Growth</h1>
                </div>

                <div className="flex justify-center h-60 lg:gap-16 md:gap-14 sm:gap-10 gap-3">
                  <div className="p-4 sm:w-1/4 w-1/2 lg:ml-10 md:ml-8 sm:ml-6 ml-2 font-bold ">
                    <h2 className="title-font font-medium lg:text-8xl md:text-8xl sm:text-6xl text-3xl text-gray-900 mb-2 ">24</h2>
                    <div className=" h-1 w-10  bg-black ml-2 "></div>
                    <p className="leading-relaxed text-gray-800 lg:text-xl md:text-lg sm:text-lg text-md">EMPLOYEES</p>
                  </div>

                  <div className="p-4 sm:w-1/4 w-1/2  lg:ml-10 md:ml-8 sm:ml-6 ml-2 font bold">
                    <h2 className="title-font font-medium lg:text-8xl md:text-8xl sm:text-6xl text-3xl text-gray-900 mb-2">16</h2>
                    <div className=" h-1 w-10  bg-black ml-4"></div>
                    <p className="leading-relaxed text-gray-800 font-bold lg:text-xl md:text-lg sm:text-lg text-md ">YEARS</p>
                  </div>

                  <div className="p-4 sm:w-1/4 w-1/2  lg:ml-10 md:ml-8 sm:ml-6 ml-2 font bold">
                    <h2 className="title-font font-medium lg:text-8xl md:text-8xl sm:text-6xl text-3xl text-gray-900 mb-2">3</h2>
                    <div className=" h-1 w-10  bg-black ml-8"></div>
                    <p className="leading-relaxed text-gray-800 font-bold lg:text-xl md:text-lg sm:text-lg text-md">LOCATIONS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}