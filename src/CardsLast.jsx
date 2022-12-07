import React from "react";


export default class CardLast extends React.Component{
    render(props){
        return(
            <div className="">
            <section className={this.props.data.sec}>
  <div className="container px-5 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="block relative h-48 w-48 ">
          <img  className="h-60 w-64" src={this.props.data.src} />
        </div>
        <div className=" w-60  ">
        <div className=" h-1 w-10   bg-black ml-20 mb-4"></div>
          <h3 className="text-black text-xl font-bold flex justify-center w-48  tracking-widest  mb-1">{this.props.data.heading}</h3>   
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
        )
    }
}