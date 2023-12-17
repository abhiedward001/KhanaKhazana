import User from "./classBasedComponentsLearning/User";
import Userclass from "./classBasedComponentsLearning/Userclass";
import { useState } from "react";
import React from "react";

class About extends React.Component{
   
    constructor(props){
       super(props);
       console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parnet mount")
    }
    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>This is the Food ordering APP. You can order foods from all nearby to your good resturants.</h1>
    
                <User name={"Abhishek Jaiswal"} city={"Delhi"}></User>
                <Userclass  name={"Abhishek Jaiswal"} city={"Varanasi"}></Userclass>
                <Userclass  name={"Himanshu Jaiswal"} city={"UP"}></Userclass>
            </div>
        )
    
    }
    
}

export default About;