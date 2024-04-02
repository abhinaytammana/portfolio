import React from "react";

function About(){
    return(
        <div className=" py-5 bg-light w-100">
        <div className=" container text-center">
            <h1 className="font-weight-light "><span className="text-info">About</span>   me</h1>
            <div className="lead pb-3">I can devlop both the front and back of the app</div>
            <div className="row">
                <div className="col-12 col-md-6 my-3 px-3 py-3"><h5>what can i do?</h5>
                    <p className="text-dark mx-3 text-justify  ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  corrupti dolore quas accusantium dolorum impedit explicabo veniam dolor cum neque eveniet, ipsa nemo laborum.</p>
                </div>

                <div className="col-12 col-md-6 my-3 px-3 py-3"><h5>what am i doing currently?</h5>
                    <p className="text-dark mx-3 text-justify ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  corrupti dolore quas accusantium dolorum impedit explicabo veniam dolor cum neque eveniet, ipsa nemo laborum.</p>
                </div>

                <div className="col-12 col-md-6 my-3 px-3 py-3"><h5>what do i believe in?</h5>
                    <p className="text-dark mx-3 text-justify ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  corrupti dolore quas accusantium dolorum impedit explicabo veniam dolor cum neque eveniet, ipsa nemo laborum.</p>
                </div>

                <div className="col-12 col-md-6 my-3 px-3 py-3"><h5>what I can help you with?</h5>
                    <p className="text-dark mx-3 text-justify ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  corrupti dolore quas accusantium dolorum impedit explicabo veniam dolor cum neque eveniet, ipsa nemo laborum.</p>
                </div>
            </div>
        </div>

     </div>
    );
}

export default About;