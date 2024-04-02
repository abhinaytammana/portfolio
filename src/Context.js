import React,{Component} from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component{
    // addProjectHandler = (newProject) =>{
    //     this.setState({
    //         projects:[newProject,...this.state.projects],
    //     });
    // };
    handler =(action,newObject)=>{
        switch (action){
            case "ADD_PROJECT":
                this.setState({
                projects:[newObject,...this.state.projects],
        });
        break;

        case "ADD_BLOG":
            this.setState({
                blogs:[newObject,...this.state.blogs],
            });
            break;

        case "ADD_RECOMMENDATION":
            this.setState({
                recommendations:[newObject,...this.state.recommendations],
            });
            break;

            default:
                break;
        }
    }
    state={
        handler:this.handler,
        blogs:[
            {
                id:1,
                title: "Blog 1",
                imageUrl: "https://img.freepik.com/free-photo/high-angle-desk-assortment-with-laptop_23-2149013922.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707350400&semt=ais",
                excerpt: "This is my blog...",
            },
            {
                id:2,
                title: "Blog 2",
                imageUrl: "https://www.shutterstock.com/image-photo/laptop-computer-blank-screen-office-260nw-1450440932.jpg",
                excerpt: "This is my blog...",
            },
            {
                id:3,
                title: "Blog 3",
                imageUrl: "https://img.freepik.com/free-photo/high-angle-desk-arrangement-with-laptop_23-2149013923.jpg",
                excerpt: "This is my blog...",
            },
        ],
        recommendations: [
            {
                id:1,
                name:"Random guy 1",
                company:"abc company",
                designation:"ceo",
                message:"he is a good engineer ",
            },
            {
                id:2,
                name:"Random guy 2",
                company:"abc company",
                designation:"Director",
                message:"he is a lazy person",
            },
            {
                id:3,
                name:"Random guy 3",
                company:"abc company",
                designation:"Manager",
                message:"he is a excellent devoloper",
            },
            {
                id:4,
                name:"Random guy 4",
                company:"abc company",
                designation:"SDE",
                message:"he gets things done so quickly",
            },
        ],
        skills: [
            {
                id:1,
                name:"HTML",
                imageUrl:"https://cdn-icons-png.freepik.com/512/919/919827.png",
                starsTotal:3,
                starsActive:1,
            },
            {
                id:2,
                name:"CSS",
                imageUrl:"https://billing.flourisense.in/wp-content/uploads/2022/11/css3.png",
                starsTotal:3,
                starsActive:2,
            },
            {
                id:3,
                name:"JS",
                imageUrl:"https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736401_960_720.png",
                starsTotal:3,
                starsActive:2,
            },
            {
                id:4,
                name:"Bootstrap",
                imageUrl:"https://miro.medium.com/v2/resize:fit:500/1*wXhdUKkpJUQZ-kqtBWCwWA.png",
                starsTotal:3,
                starsActive:2,
            },
            {
                id:5,
                name:"React",
                imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZcpvdnbhcRhQ_D-Gxk2yO_MEYCH6hGioKYRiM_rQjZJPez2kxbJ-ODzXYUFtU2uTh78&usqp=CAU",
                starsTotal:3,
                starsActive:3,
            },
            {
                id:6,
                name:"MySQL",
                imageUrl:"https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-2.png",
                starsTotal:3,
                starsActive:2,
            },
            {
                id:7,
                name:"Python",
                imageUrl:"https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc",
                starsTotal:3,
                starsActive:0,
            },
            {
                id:8,
                name:"Flask",
                imageUrl:"https://ih1.redbubble.net/image.2488655049.9084/st,small,507x507-pad,600x600,f8f8f8.jpg",
                starsTotal:3,
                starsActive:2,
            },
        ],
        projects: [
            {
                id:1,
                title: "project 1",
                imageUrl: "https://img.freepik.com/free-photo/high-angle-desk-assortment-with-laptop_23-2149013922.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707350400&semt=ais",
                excerpt: "This is my project...",
                body:"body 1",
            },
            {
                id:2,
                title: "project 2",
                imageUrl: "https://www.shutterstock.com/image-photo/laptop-computer-blank-screen-office-260nw-1450440932.jpg",
                excerpt: "This is my project...",
                body:"body 2",
            },
            {
                id:3,
                title: "project 3",
                imageUrl: "https://img.freepik.com/free-photo/high-angle-desk-arrangement-with-laptop_23-2149013923.jpg",
                excerpt: "This is my project...",
                body:"body 3",
            },
        ],
    };
    async componentDidMount(){

        const[
            responseRecommendations,
            responseSkills,
            responseProjects,
            responseBlogs,
        ]= await Promise.all([
            axios.get(
                "http://127.0.0.1:9000/api/recommendations"
            ),
            axios.get(
                "http://127.0.0.1:9000/api/skills"
            ),
            axios.get(
                "http://127.0.0.1:9000/api/projects"
            ),
            axios.get(
                "http://127.0.0.1:9000/api/blogs"
            ),
        ]);

        const newState={};
        if(
            responseRecommendations.data.isSuccessful && 
            responseRecommendations.data.results.length !== 0
        ){
            newState.recommendations=responseRecommendations.data.results;
        }

        if(
            responseSkills.data.isSuccessful && 
            responseSkills.data.results.length !== 0
        ){
            newState.skills=responseSkills.data.results;
        }

        if(
            responseProjects.data.isSuccessful && 
            responseProjects.data.results.length !== 0
        ){
            newState.projects=responseProjects.data.results;
        }

        if(
            responseBlogs.data.isSuccessful && 
            responseBlogs.data.results.length !== 0
        ){
            newState.blogs=responseBlogs.data.results;
        }

        this.setState(newState);
        // let response =await axios.get(
        //     "http://127.0.0.1:9000/api/recommendations"
        // );
        // console.log(response);
        // if (response.data.isSuccessful && response.data.results.length !== 0 ){
        //     this.setState({
        //         recommendations: response.data.results,
        //     });
        // }

        // response =await axios.get(
        //     "http://127.0.0.1:9000/api/skills"
        // );
        // console.log(response);
        // if (response.data.isSuccessful && response.data.results.length !== 0 ){
        //     this.setState({
        //         skills: response.data.results,
        //     });
        // }

        // response =await axios.get(
        //     "http://127.0.0.1:9000/api/projects"
        // );
        // console.log(response);
        // if (response.data.isSuccessful && response.data.results.length !== 0 ){
        //     this.setState({
        //         projects: response.data.results,
        //     });
        // }

        // response =await axios.get(
        //     "http://127.0.0.1:9000/api/blogs"
        // );
        // console.log(response);
        // if (response.data.isSuccessful && response.data.results.length !== 0 ){
        //     this.setState({
        //         blogs: response.data.results,
        //     });
        // }
    }
    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;