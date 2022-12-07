import React from "react";
import CardLast from "./CardsLast";
import img1 from "./pics/logo-6.svg"
import img2 from "./pics/logo-2.svg"
import img3 from "./pics/logo-3.svg"
import img4 from "./pics/logo-4.svg"
import img5 from "./pics/logo-5.svg"
import img6 from "./pics/logo-6.svg"
// import img7 from "./pics/logo-7.svg"


export default class ServiceCard extends React.Component{
    render(){
        return(
            <>
             <div className="flex justify-center gap-6 flex-wrap py-28 ">
            <CardLast data={{src:img1,heading:"DEFAULT",sec:"text-gray-600 body-font h-72 w-58  bg-gray-300"}}/>
            <CardLast data={{src:img2,heading:"DEFAULT",sec:"text-white body-font h-72 w-58  bg-red-500"}}/>
            <CardLast data={{src:img3,heading:"DEFAULT",sec:"text-gray-600 body-font h-72 w-58  bg-gray-300"}}/>
            <CardLast data={{src:img4,heading:"DEFAULT",sec:"text-gray-600 body-font h-72 w-58  bg-gray-300"}}/> 
            
           
            {/* <div className="flex gap-10 flex-wrap "> */}
            <CardLast data={{src:img5,heading:"DEFAULT",sec:"text-gray-600 body-font h-72 w-58 mt-5 bg-gray-300"}}/>
            <CardLast data={{src:img6,heading:"DEFAULT",sec:"text-gray-600 body-font h-72 w-58 mt-5 bg-gray-300"}}/> 
            <CardLast data={{src:img1,heading:"DEFAULT",sec:"text-gray-600 body-font h-72 w-58 mt-5 bg-gray-300"}}/>
            </div>
            {/* </div> */}
            </>
           
        )
    }
}