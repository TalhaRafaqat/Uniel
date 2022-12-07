import React from "react";
import Services from "./Services";
import img1 from "./pics/presentation.svg"
import img2 from "./pics/archery.svg"
import img3 from "./pics/rocket.svg"
import img4 from "./pics/responsive.svg"
import img5 from "./pics/whiteboard.svg"

export default class Services_card extends React.Component{
    render(){
        return(
            <>
             <div className="pl-28 mt-28 flex flex-col justify-between ">
                <h3 className=" font-bold py-10">FULL SERVICE STUDIO</h3>
                <h1 className="text-5xl font-bold ">Services</h1>
             </div>
            <div className="flex flex-wrap justify-center gap-4">
               

            <Services data={{hed:"MARKETING",icon:img1,bg:"flex flex-wrap -m-4",ico:"h-38  w-44 mb-20",und:"h-1 w-7 bg-black",head:"text-lg text-gray-900 font-medium title-font mb-4 mt-5"}}/>
            <Services  data={{hed:"BRANDING",icon:img2,bg:"flex flex-wrap -m-4 bg-red-500",ico:"h-38  w-44 mb-20",und:"h-1 w-7 bg-white",head:"text-lg text-white font-medium title-font mb-4 mt-5"}}/>
            <Services  data={{hed:"MOTION",icon:img3,bg:"flex flex-wrap -m-4",ico:"h-38  w-44 mb-20",und:"h-1 w-7 bg-black",head:"text-lg text-gray-900 font-medium title-font mb-4 mt-5"}}/>
            <Services  data={{hed:"UI DESIGN",icon:img4,bg:"flex flex-wrap -m-4",ico:"h-38  w-44 mb-20",und:"h-1 w-7 bg-black",head:"text-lg text-gray-900 font-medium title-font mb-4 mt-5"}}/>
            <Services  data={{hed:"UX DESIGN",icon:img5,bg:"flex flex-wrap -m-4",ico:"h-38  w-44 mb-20",und:"h-1 w-7 bg-black",head:"text-lg text-gray-900 font-medium title-font mb-4 mt-5"}}/>
        </div>
            </>
           
        )
    }
    
}

