import React from 'react';
import Skill from './Skill';
import {v4 as uuid} from "uuid";
import { Consumer } from '../Context';

function SkillSection() {
    // const skills = [
    //     {
    //         id:1,
    //         name:"HTML",
    //         imageUrl:"https://cdn-icons-png.freepik.com/512/919/919827.png",
    //         starsTotal:3,
    //         starsActive:2,
    //     },
    //     {
    //         id:2,
    //         name:"CSS",
    //         imageUrl:"https://billing.flourisense.in/wp-content/uploads/2022/11/css3.png",
    //         starsTotal:3,
    //         starsActive:2,
    //     },
    //     {
    //         id:3,
    //         name:"JS",
    //         imageUrl:"https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_960_720.png",
    //         starsTotal:3,
    //         starsActive:2,
    //     },
    //     {
    //         id:4,
    //         name:"Bootstrap",
    //         imageUrl:"https://miro.medium.com/v2/resize:fit:500/1*wXhdUKkpJUQZ-kqtBWCwWA.png",
    //         starsTotal:3,
    //         starsActive:2,
    //     },
    //     {
    //         id:5,
    //         name:"React",
    //         imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZcpvdnbhcRhQ_D-Gxk2yO_MEYCH6hGioKYRiM_rQjZJPez2kxbJ-ODzXYUFtU2uTh78&usqp=CAU",
    //         starsTotal:3,
    //         starsActive:3,
    //     },
    //     {
    //         id:6,
    //         name:"MySQL",
    //         imageUrl:"https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-2.png",
    //         starsTotal:3,
    //         starsActive:2,
    //     },
    //     {
    //         id:7,
    //         name:"Python",
    //         imageUrl:"https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc",
    //         starsTotal:3,
    //         starsActive:0,
    //     },
    //     {
    //         id:8,
    //         name:"Flask",
    //         imageUrl:"https://ih1.redbubble.net/image.2488655049.9084/st,small,507x507-pad,600x600,f8f8f8.jpg",
    //         starsTotal:3,
    //         starsActive:2,
    //     },
    // ];

    return(
        <Consumer>
            {value => {
                const {skills}=value;
                const finalSkillRow = [];
                for(let i=0;i<skills.length/4;i++){
                    let skillRow = skills.slice(i * 4,(i + 1) * 4);
                    finalSkillRow.push(
                        <div key={uuid()} className="d-flex justify-content-around ">
                       { skillRow.map((skill) => (
                            <Skill key={uuid()} skill={skill} />
                       ))}
                    </div> 
                    );
                } 
                return (
                    <div className="py-3 bg-light w-100">
                        <div className="container text-center my-5">
                            <h1 className="font-weight-light ">
                                <span className="text-info">
                                    Technology</span>   
                                    stack
                            </h1>
                            <div className="lead pb-3">I design,devolop and design with these weapons</div>
                                {finalSkillRow}      
                        </div>
                     </div>
                  )
            }}
        </Consumer>
    );  
}

export default SkillSection;
