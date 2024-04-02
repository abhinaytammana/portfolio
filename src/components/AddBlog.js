import React, { Component } from 'react';
import SimpleMDEEditor from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import Markdown from "react-markdown";
import { Consumer} from '../Context';
import {v4 as uuid} from "uuid";
import axios from 'axios';

class AddBlog extends Component {
    state = {
        imageUrl:"",
        title:"",
        excerpt:"",
        body:"",
        submitMessage:"",
        submitMessageTextColor:"",
    };

    onChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    };

    onBodyChange = (value) => {
        this.setState({
            body:value,
        })
    };

    onSubmit = async(handler,event ) =>{
        event.preventDefault();

        const newBlog={
            id:uuid(),
            imageUrl:this.state.imageUrl,
            title:this.state.title,
            excerpt:this.state.excerpt,
            body:this.state.body,
        };

        const response = await axios.post("http://127.0.0.1:9000/api/blog",newBlog);

        const isSuccessful = response.data.isSuccessful;
        
        if(isSuccessful){
            this.setState({
                submitMessage:`Blog published successfully`,
                submitMessageTextColor:"text-info",
            });
        }else{
            this.setState({
                submitMessage:"!Blog failed :(",
                submitMessageTextColor:"text-danger",
            });
        }

        // const{imageUrl,title,excerpt,body}=this.state;
        // const newProject={
        //     id:uuid(),
        //     imageUrl:imageUrl,
        //     title:title,
        //     excerpt:excerpt,
        //     body:body,
        // }
        handler("ADD_BLOG",newBlog);
    };

  render() {
    return(
        <Consumer>
            {value=>{
                const {
                    imageUrl,
                    title,
                    body,
                    submitMessage,
                    submitMessageTextColor
                }=this.state;
                const {handler} =value;

                return <div className="container my-5 py-5">
                    <h1 className="text-center my-5 font-weight-light">
                        Add <span className="text-info"> Blogs</span>
                    </h1>
                    <div className="row px-3 px-lg-5">
                        <div className="col-12 col-lg-6 px-lg-5">
                            <form onSubmit={this.onSubmit.bind(this,handler)}>
                                <div className="form-group">
                                    <label htmlFor="imageurl">Featured Image Url *</label>
                                    <input 
                                        type="text" 
                                        name='imageUrl'
                                        id='imageUrl'
                                        className='form-control'
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="imageurl">Title *</label>
                                    <input 
                                        type="text" 
                                        name='title'
                                        id='title'
                                        className='form-control'
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="imageurl">Excerpt *</label>
                                    <input 
                                        type="text" 
                                        name='excerpt'
                                        id='excerpt'
                                        className='form-control'
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <SimpleMDEEditor
                                    onChange={this.onBodyChange}
                                    options={{ 
                                    minHeight: '200px', 
                                    maxHeight: '300px', 
                                    width: '100%', 
                                    hideIcons:["preview","side-by-side","fullscreen"],
                                    }} 
                                />
                                <button 
                                    type='Submit'
                                    className='btn btn-info btn-block my-5 '
                                    style={{backgroundColor: ""}}>
                                        Publish
                                    </button>
                            </form>
                            <div className="text-center">
                                <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 markdown ">
                            <div className="justify-content-center">
                                <img src={imageUrl} alt={title} className='img-fluid' />
                            </div>
                            <h1 className="font-weight-light text-center my-5">
                                {title}
                            </h1>
                            <Markdown>{body}</Markdown>
            
                        </div>
                    </div>
                </div>             
            }}
        </Consumer>
    );
    
  }
}

export default AddBlog;