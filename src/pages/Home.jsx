import React from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Github from "../components/Github";
import "./home.css"

const Home = ()=> {
    return (
        <div className="home">
            <Intro />
            <Projects />
            <Github />
        </div>
    )
};

export default Home