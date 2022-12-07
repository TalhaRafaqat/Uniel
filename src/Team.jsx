import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";


export default class Team extends React.Component{
    render(props){
        return(
            <>            
<div className="max-w-sm bg-red rounded-lg  h-[400px] w-[230px] border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded" src={this.props.data.src} />
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{this.props.data.alex}</h5>
        <p className="mb-3 font-normal text-white dark:text-gray-400">{this.props.data.art} </p>
        <div className="flex w-36 text-white text-2xl justify-between"><GrFacebookOption /> <AiOutlineInstagram/> <AiOutlineTwitter/> <AiFillYoutube/></div>
</div>
</div>

            </>
        )
    }
}