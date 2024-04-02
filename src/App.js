import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Title from './components/Title';
// import About from './components/About';
import Footer from './components/Footer';
// import ProjectSelection from './components/ProjectSelection';
// import SkillSection from './components/SkillSection';
// import RecommendationSection from './components/RecommendationSection';
import Contact from './components/Contact';
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import BlogPage from './components/BlogPage';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import AddProject from './components/AddProject';
import AddBlog from './components/AddBlog';
import AllProjects from './components/AllProjects';
import AllBlogs from './components/AllBlogs';
import { Provider } from './Context';
import WriteRecommendation from './components/WriteRecommendation';
import ScrollToTop from './components/ScrollToTop';
import Test from './components/Test';


function App() {
  return (
     <Provider>
      <BrowserRouter> 
      <ScrollToTop/>     
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path='/contact' component={Contact}/>
        <Route exact path="/writeRecommendation" component={WriteRecommendation}/>
        <Route exact path="/allprojects" component={AllProjects} />
        <Route exact path="/allblogs" component={AllBlogs}/>
        <Route exact path="/project/add" component={AddProject} />
        <Route exact path="/blog/add" component={AddBlog}/>
        {/* <Route exact path="/project/:number" component={ProjectPage}/> */}
        <Route exact path="/project/:id" component={ProjectPage}/>
        <Route exact path="/blog/:id" component={BlogPage}/>
        <Route exact path="/Test" component={Test}/>
        <Route component={NotFound} />
      </Switch>      
      <Footer />    
    </BrowserRouter>
     </Provider> 
  );
}


export default App;
