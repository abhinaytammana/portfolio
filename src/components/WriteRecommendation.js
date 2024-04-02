import React,{Component} from 'react'
import { Consumer } from '../Context';
import {v4 as uuid} from "uuid";
import axios from 'axios';

class WriteRecommendation extends Component {
        // another way with out using constructor and super class
        state = {
            name: "",
            email: "",
            company: "",
            designation: "",
            recommendationMessage: "",
            submitMessage: "",
            submitMessageTextColor: "",
        };
    // constructor(){
    //     super();

    //     this.state={
    //         name:"",
    //         email:"",
    //         description:"",
    //         submitMessage:"",
    //         submitMessageTextColor:"",
    //     };
    // }

    onChange =(event) =>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    };
    // onSubmit =async (handler,event) =>{
    //     event.preventDefault();
        
    //     const newRecommendation = {
    //         id: uuid(),
    //         name: this.state.name,
    //         email: this.state.email,
    //         company: this.state.company,
    //         designation: this.state.designation,
    //         message: this.state.recommendationMessage,
    //     };
        
    //     const response = await axios.post(
    //         "http://127.0.0.1:9000/api/recommendation",
    //         newRecommendation
    //     );
    //     const isSuccessful = response.data.isSuccessful;

    //     const {name}=this.state;
        
    //     if(isSuccessful){
    //         this.setState({
    //             submitMessage:`Thank you ${name} for the recommendtion!.I am glad for you appreciation`,
    //             submitMessageTextColor:"text-info",
    //         });
    //     }else{
    //         this.setState({
    //             submitMessage:"Oops!Something went wrong.Please try again later :(",
    //             submitMessageTextColor:"text-danger",
    //         })
    //     }
    //     handler("ADD_RECOMMENDATION",newRecommendation);
    // };

    onSubmit = async (handler, event) => {
        event.preventDefault();
        
        const newRecommendation = {
            id: uuid(),
            name: this.state.name,
            email: this.state.email,
            company: this.state.company,
            designation: this.state.designation,
            message: this.state.recommendationMessage,
        };
        
        const response = await axios.post(
            "http://127.0.0.1:9000/api/recommendation",
            newRecommendation
        );
        const isSuccessful = response.data.isSuccessful;

        const { name } = this.state;
        
        if (isSuccessful) {
            this.setState({
                submitMessage: `Thank you ${name} for the recommendation! I am glad for your appreciation.`,
                submitMessageTextColor: "text-info",
            });
        } else {
            this.setState({
                submitMessage: "Oops! Something went wrong. Please try again later.",
                submitMessageTextColor: "text-danger",
            });
        }
        handler("ADD_RECOMMENDATION", newRecommendation);
    };


    render(){
        return(
        <Consumer>
            {value =>{
                const{ submitMessage,submitMessageTextColor}=this.state;
                const {handler}=value;
                return (
                    <div className='container my-5'>
                        <h1 className='font-weight-light text-center py-5'>
                            <span className='text-info'>thank you! </span> for your interest
                        </h1>
                        <div className='row justify-content-center'>
                            <div className='col-11 col-lg-5'>
                                <form onSubmit={this.onSubmit.bind(this,handler)}>
                                    <div className='form-group'>
                                        <label htmlFor="name">Name * :      </label>
                                        <input 
                                            type="text"
                                            className='form-control' 
                                            name="name" 
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="email">Email * : </label>
                                        <input 
                                            type="text"
                                            className='form-control' 
                                            name="email" 
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="company">Company/Institute * : </label>
                                        <input 
                                            type="text"
                                            className='form-control' 
                                            name="company" 
                                            onChange={this.onChange}
                                        />   
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="designation">Designation * :</label>
                                        <input 
                                            type="text"
                                            className='form-control' 
                                            name="designation" 
                                            onChange={this.onChange}
                                        /> 
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="recommendationMessage">RecommendationMessage * :</label>
                                        <textarea 
                                            className='form-control' 
                                            name="recommendationMessage" 
                                            rows="5"
                                            onChange={this.onChange}>
                                        </textarea>
                                    </div>
                                    <button type='submit'
                                        className='btn btn-info float-right'
                                        style={{backgroundColor:""}}>
                                            lot's of love
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='py-5 mx-5 text-center'>
                            <h5 className={submitMessageTextColor} > {submitMessage} </h5>
                        </div>
                    </div>
                );
            }}
        </Consumer>
        )
    }
}

export default WriteRecommendation;