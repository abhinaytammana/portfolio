import React from 'react';
import { Consumer } from '../Context';
import Projectcards from './Projectcards';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ProjectSelection() {
    // const projects = [
    //     {
    //         id:1,
    //         title: "project 1",
    //         imageUrl: "https://img.freepik.com/free-photo/high-angle-desk-assortment-with-laptop_23-2149013922.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707350400&semt=ais",
    //         excerpt: "This is my project...",
    //     },
    //     {
    //         id:2,
    //         title: "project 2",
    //         imageUrl: "https://www.shutterstock.com/image-photo/laptop-computer-blank-screen-office-260nw-1450440932.jpg",
    //         excerpt: "This is my project...",
    //     },
    //     {
    //         id:3,
    //         title: "project 3",
    //         imageUrl: "https://img.freepik.com/free-photo/high-angle-desk-arrangement-with-laptop_23-2149013923.jpg",
    //         excerpt: "This is my project...",
    //     },
    // ];
  return (
    <Consumer>
        {({ projects }) => (

            <div className="py-3 bg-light w-100 my-5">
                <div className="container text-center">
                    <h1 className="font-weight-light ">My <span className="text-info">Projects</span></h1>
                    <div className="lead pb-3">I build projects.Just like this projects...</div>
                    <div className="row">
                        { 
                            projects.slice(0,3).map((project) => (
                            // projects.map((project) => (
                            <div key={project.id} className="col-12 col-md-4 my-3">
                                {/* <Projectcards 
                                 title={project.title} 
                                excerpt={project.excerpt} 
                                imageUrl={project.imageUrl}    
                                />   */}
                                <Projectcards project={project}
                            /> 
                            </div>
                            ))
                        }
                    </div>
                        <Link to="/allprojects" className="text-dark text-right">
                            <h5>See my projects
                                <i className="fas fa-arrow-right align-middle"></i>
                            </h5>
                        </Link>
                </div>
            </div>
        )}
    </Consumer>
  )
}

export default ProjectSelection;