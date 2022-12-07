import React from "react";

export default class Services extends React.Component {
  render() {
    return (
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">

            <div class={this.props.data.bg}>
              <div class="xl:w-56 md:w-1/2 p-4 border border-black ">
                <div class=" p-6 ">
                  <img class={this.props.data.ico} src={this.props.data.icon} />
                  <div class={this.props.data.und} ></div>

                  <h1 class={this.props.data.head}>{this.props.data.hed}</h1>

                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    )
  }
}