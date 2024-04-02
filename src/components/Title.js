import React from "react";
import PropTypes from "prop-types";
import abhi1 from "../Assets/abhi1.jpg";

function Title(props){
    // const name="Tammana N V S Abhinay";
    // const leadtext="I am a front end Devoloper";
    const { name,leadtext } = props;
    return(
        <div className="container py-5 my-5 ">
        <div className="row text-center align-items-center">
            <div className="col-12 col-md-6">
                <img src={abhi1}
                 alt="abhinaytammana " 
                 className="img-fluid  w-100"
                 style={{borderRadius: "100%"}}
                 />
            </div>
            <div className="col-12 col-md-6  pt-5">
                <div className="font-weight-normal" style={{fontSize: "40px"}}>
                    Hi,I am <span className="text-info"> {name}</span> 
                </div>
                <h4 className="font-weight-light" >
                    {leadtext}
                </h4>
            </div>
        </div>
    </div>
    );
}
Title.defaultProps ={
    name:"Tammana N V S Abhinay",
    leadtext:"i am a full Stack Devoloper",
};

Title.propTypes ={
    name:PropTypes.string.isRequired,
}
export default Title;