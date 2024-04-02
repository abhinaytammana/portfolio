import React from "react";
import Title from "./Title";
import About from "./About";
import ProjectSelection from "./ProjectSelection";
import SkillSection from "./SkillSection";
import BlogSection from "./BlogSection";
import RecommendationSection from "./RecommendationSection";

function HomePage(){
    return(
        <div>
            <Title name="Tammana N V S Abhinay" leadtext="I am a front end Devoloper" />
            <RecommendationSection/>
            <ProjectSelection/>
            <SkillSection/>
            <BlogSection/>
            <About />
        </div>
    )
}

export default HomePage;