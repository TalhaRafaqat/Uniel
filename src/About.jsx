import React from "react";
import { BsArrowRight } from 'react-icons/bs';
import Img from "./pics/photo-1465804575741-338df8554e02.jfif"

export default class About extends React.Component {
  render() {
    return (
      <div className="bg-red-500 grid  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 py-8">
        <div className="">
          <h3 className="text-white mt-20 ml-16">THE STORY SO FAR</h3>
          <h1 className="text-white text-6xl mt-6 ml-16">About Us</h1>
          <p className="text-white mt-10 ml-16">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br />
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in<br />
            voluptate velit esse cillum dolore eu fugiat nulla<br />
            pariatur. Excepteur sint occaecat cupidatat non proident.

          </p>
          <p className="text-white ml-16 mt-5">
            Duis aute irure dolor in quis nostrud exercitation ullamco laboris nisi ut<br />
            aliquip ex ea commodo consequat. Duis aute irure dolor in<br />
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <p className="text-white ml-16 mt-5">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br />
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in<br />
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br />
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>

          <h1 className="text-white ml-16 mt-8 flex items-center">CONTACT <BsArrowRight className="ml-3" /></h1>
        </div>

        <div className=" flex justify-center items-center">
          {/* <div className="h-[600px] w-[550px] img border border-black"></div> */}
          <div className="border border-black">
            <img className="w-[35rem] h-[38rem]" src={Img} alt="" />
          </div>
        </div>
      </div>
    )
  }
}