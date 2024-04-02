import React, { Component } from 'react'
// import { Consumer } from '../Context';
import Markdown from 'react-markdown';
import axios from 'axios';

// function ProjectPage(props) {
  // return(
  //   <Consumer>
  //     {value =>{
  //       const {projects}=value;
  //       const id=props.match.params.id;
  //       const project =projects.filter((project)=>project.id === id)[0];
  //       const {imageUrl,title,body}=project;
  //       return (
  //         <div className="container py-5 my-5 markdown ">
  //           <div className="justify-content-center">
  //             <img src={imageUrl} alt={title} className='w-100' />
  //           </div>
  //           <h1 className="font-weight-light text-center my-5">
  //             {title}
  //           </h1>
  //           <Markdown>{body}</Markdown>
  //         </div>
  //       );
  //     }}
  //   </Consumer>
// }

class ProjectPage extends Component{
  state={
    imageUrl:"",
    title:"",
    body:"",
  };
  async componentDidMount (){
    const response = await axios.get(
      `http://127.0.0.1:9000/api/project?id=${this.props.match.params.id}`
    );

    console.log(response);
    const isSuccessful = response.data.isSuccessful;

    if (isSuccessful){
      this.setState({
        imageUrl:response.data.result.imageUrl,
        title: response.data.result.title,
        body: response.data.result.body,
      });
    }
  }
  render(){
    const {imageUrl,title,body}=this.state;
    return (
      <div className="container py-5 my-5 markdown ">
        <div className="justify-content-center">
          <img src={imageUrl} alt={title} className='w-100' />
        </div>
        <h1 className="font-weight-light text-center my-5">
          {title}
        </h1>
        <Markdown>{body}</Markdown>
      </div>
    );
  }
}

export default ProjectPage;