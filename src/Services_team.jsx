import React from "react";
import Team from "./Team"
import img1 from "./pics/photo-1544723795-3fb6469f5b39.jfif"
import img2 from "./pics/photo-1542103749-8ef59b94f47e.jfif"
import img3 from "./pics/source.jfif"
import img4 from "./pics/photo-1547425260-76bcadfb4f2c.jfif"



export default class Services_team extends React.Component{
    render(){
        return(
            <>
            <div className="py-10 gap-5 bg-red-500">
            <h1 className="text-white lg:text-5xl md:text-5xl sm:text-4xl text-3xl mt-5 font-bold ml-5">Our Team</h1>
            <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Team data={{src:img1,alex:"Alex Tomson",art:"Art Director"}}/>
            <Team data={{src:img2,alex:"Alex Tomson",art:"Art Director"}}/>
            <Team data={{src:img3,alex:"Alex Tomson",art:"Art Director"}}/>
            <Team data={{src:img4,alex:"Alex Tomson",art:"Art Director"}}/>
            <Team data={{alex:"Alex Tomson",art:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor."}}/>
            </div>
            
            </div>
            </>
        )
    }
}