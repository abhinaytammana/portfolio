import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer(){
    return(
        <footer className="py-4 ">
        <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
                <div className=" py-5">
                    <h2 className="text-light pb-3">Intrested in talking with me?</h2>
                    <Link to="/contact" >
                    <button className="btn btn-outLine-light btn-lg ">Let's talk</button>
                    </Link>
                </div>
            <div className="row">
                <div className="col-12 col-md-4 py-3">
                    <h4 className="text-info pb-3">More Links</h4>
                    <Link to="/" className="text-light">Blogs</Link><br/>
                    <Link to="/allprojects" className="text-light">Projects</Link><br/>  
                    <Link to="/" className="text-light ">Home</Link><br/>
                    <Link to="/contact" className="text-light">Contact me</Link><br/>
                    <Link to="/writeRecommendation" className="text-light">Write a recomendation <i className="fas fa-heart "></i></Link>
                </div>

                <div className="col-12 col-md-4  text-light text-justify py-3 ">
                    <p>
                    To start with, I'm a very interesting fellow, who's very hard to understand. A selfless attitude towards anyone whom I come across with. I'm of a very friendly nature and love to be with people who aren't selfish.
                    Ambitious can do anything to achieve my aim. I'm of a very competitive nature but love to find good in everything I see. According to me, there are many things that make us depressed or upset, but that doesn't mean that we stop living. 
                    </p>
                </div>

                <div className="col-12 col-md-4 py-3">
                    <h4 className="text-info pb-3">Social</h4>
                    <Link to="/">
                        <i className="fab fa-Linkedin text-light h1 d-block"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-github text-light h1 d-block"></i>
                    </Link>
                    <Link to="/">
                        <i className="fas fa-envelope text-light h1 d-block"></i>
                    </Link>
                </div>

            </div>
            <div className="text-muted">   
                <p>Copyright @ Abhinay Tammana</p>
            </div>
        </div>
    </footer>
    );
}
export default Footer;