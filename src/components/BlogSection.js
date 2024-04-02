import React from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Consumer } from "../Context";

function BlogSection(){
    return(
            <Consumer>
                {({ blogs }) => (
        
                    <div className="py-3 bg-light w-100 my-5">
                        <div className="container text-center">
                            <h1 className="font-weight-light ">
                                My <span className="text-info">Blogs</span>
                            </h1>
                            <div className="lead pb-3">
                                I build blogs.Just like this blogs...
                            </div>
                            <div className="row">
                                { 
                                    blogs.map((blog) => (
                                    // blogs.map((blog) => (
                                    <div key={blog.id} className="col-12 col-md-4 my-3">
                                        {/* <Projectcards 
                                         title={blog.title} 
                                        excerpt={blog.excerpt} 
                                        imageUrl={blog.imageUrl}    
                                        />   */}
                                        <BlogCard blog={blog}
                                    /> 
                                    </div>
                                    ))
                                }
                            </div>
                                <Link to="/allblogs" className="text-dark text-right">
                                    <h5>See my blogs
                                        <i className="fas fa-arrow-right align-middle"></i>
                                    </h5>
                                </Link>
                        </div>
                    </div>
                )}
            </Consumer>
    )
}

export default BlogSection;