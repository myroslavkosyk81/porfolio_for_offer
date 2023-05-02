import "./github.css";
import React from "react";
import gitImg from "./img/git.png";
import { Link } from "react-router-dom";

export default function Github () {
   
    var elements = [];
     const list = [
          //Sorry, I can't show all code. But don't worry, it works! 
          ];
    for (let i = 0; i<365; i++) {
elements.push(React.createElement("div", {className: list.includes(i) ? "box active" : "box"}));
        // console.log(i)
    }
    return (
        <div className="githubContainer">
            <Link to="https://github.com/myroslavkosyk81" style={{ textDecoration: 'none' }}>   
                <h1 className="githubTitle">Other projects</h1>
                <div className="githubChart">
                    <div className="dates">
                    //Sorry, I can't show all code. But don't worry, it works! 
                    </div>
                    <div className="boxContainer">
                        {elements}
                       
                </div>
                    <h1 className="githubTitle">On Github</h1>
                </div>
                <div className="githubSm">
                //Sorry, I can't show all code. But don't worry, it works! 
                </div>
            </Link>
        </div>
        
    )
};