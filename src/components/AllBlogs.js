import React, { Component } from 'react';
import { Consumer } from '../Context';
import BlogCard from './BlogCard';

class AllBlogs extends Component {
  render() {
    return (
     <Consumer>
        {(value)=>{
            const {blogs} =value;
            return (
                <div className='container text-center my-5 py-5'>
                    <div className="py-5">
                        <h1 className="font-weight-light">
                            All My <span className="text-info">Blogs</span>
                        </h1>
                    </div>
                    <div className="row my-5 pt-4">
                        {blogs.slice(0,3).map((blog)=>(
                            <div key={blog.id} className="col-12 col-md-6 py-3">
                                <BlogCard blog={blog}/>
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

export default AllBlogs;