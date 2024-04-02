import React, { Component } from 'react';
import { Consumer } from '../Context';
import Projectcards from './Projectcards';

class AllProjects extends Component {
  render() {
    return (
     <Consumer>
        {(value)=>{
            const {projects} =value;
            return (
                <div className='container text-center my-5 py-5'>
                    <div className="py-5">
                        <h1 className="font-weight-light">
                            All My <span className="text-info">Projects</span>
                        </h1>
                    </div>
                    <div className="row my-5 pt-4">
                        {projects.map((project)=>(
                            <div key={project.id} className="col-12 col-md-6 py-3">
                                <Projectcards project={project}/>
                            </div>
                        ))}
                    </div>
                </div>
            );            
        }}
    </Consumer>
    );
  }
}

export default AllProjects;