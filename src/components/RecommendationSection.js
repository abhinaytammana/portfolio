import React from 'react';
import RecommendationCards from './RecommendationCards';
import {v4 as uuid} from "uuid";
import { Consumer } from '../Context';

 function RecommendationSection() {
    // const recommendations = [
    //     {
    //         id:1,
    //         name:"Random guy 1",
    //         company:"abc company",
    //         designation:"ceo",
    //         message:"he is a good engineer ",
    //     },
    //     {
    //         id:2,
    //         name:"Random guy 2",
    //         company:"abc company",
    //         designation:"Director",
    //         message:"he is a lazy person",
    //     },
    //     {
    //         id:3,
    //         name:"Random guy 3",
    //         company:"abc company",
    //         designation:"Manager",
    //         message:"he is a excellent devoloper",
    //     },
    //     {
    //         id:4,
    //         name:"Random guy 4",
    //         company:"abc company",
    //         designation:"SDE",
    //         message:"he gets things done so quickly",
    //     },
    // ];
    return(
        <Consumer>
            {value=>{
                const {recommendations}=value;
                return (
                    <div className="container-fluid my-5">
                        <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
                            {recommendations.map((recommendation) => (
                                < RecommendationCards key={uuid()} recommendation={recommendation} />
                            )
                            )}
                        </div>
                    </div>
                  )
            }}
        </Consumer>
    );
  
}

export default RecommendationSection;