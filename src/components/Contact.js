import axios from 'axios';
import React,{Component} from 'react'
import {v4 as uuid} from "uuid";

class Contact extends Component {
        // another way with out using constructor and super class
        // state={
        //     name:"",
        //     email:"",
        //     description:"",
        //     submitMessage:"",
        //     submitMessageTextColor:"",
        // };
    constructor(){
        super();

        this.state={
            name:"",
            email:"",
            description:"",
            submitMessage:"",
            submitMessageTextColor:"",
        };
    }
    // onNameChange =(event) =>{
    //     // console.log(event.target.name or value);
    //     this.setState({
    //         name:event.target.value,
    //     });
    // }
    onChange =(event) =>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    };
    onSubmit =async (event) =>{
        event.preventDefault();
        
        const newContact ={
            id:uuid(),
            name:this.state.name,
            email:this.state.email,
            description:this.state.description,
        };

        const response = await axios.post(
            "http://127.0.0.1:9000/api/contact",
            newContact
        );
        const isSuccessful = response.data.isSuccessful;

        const {name}=this.state;
        
        if(isSuccessful){
            this.setState({
                submitMessage:`Thank you ${name}.I will contact you soon!`,
                submitMessageTextColor:"text-info",
            });
        }else{
            this.setState({
                submitMessage:"Oops!Something went wrong.Please try again later :(",
                submitMessageTextColor:"text-danger",
            });
        }
    };

    render(){
        const{ submitMessage,submitMessageTextColor}=this.state;
        return (
            <div className='container my-5'>
                <h1 className='font-weight-light text-center py-5'>
                    <span className='text-info'>thank you! </span> for your interest
                </h1>
                <div className='row justify-content-center'>
                    <div className='col-11 col-lg-5'>
                        <form onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor="name">Name * : </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className='form-conterl' 
                                    onChange={this.onChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Email * : </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    className='form-conterl'
                                    onChange={this.onChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="description">tell me about your project * :</label>
                                <textarea 
                                    className='form-control' 
                                    name="description" 
                                    rows="5"
                                    onChange={this.onChange}>
                                </textarea>
                            </div>
                            <button type='submit'
                                className='btn btn-info float-right'
                                style={{backgroundColor:""}}>
                                    let's talk business
                            </button>
                        </form>
                    </div>
                </div>
                <div className='py-5 mx-5 text-center'>
                    <h5 className={submitMessageTextColor} > {submitMessage} </h5>
                </div>
            </div>
        );
    }
}

export default Contact;