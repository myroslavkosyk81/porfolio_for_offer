import "./intro.css";
import person from "./img/person2.png"
import { useEffect } from "react";

export default function Intro () {
    useEffect(() => {
        const saluteTextContainer = document.querySelector('.saluteTextContainer')
        const saluteTextContainerMobile = document.querySelector('.saluteTextContainerMobile')
        const saluteImgContainer = document.querySelector('.saluteImgContainer')
        const authorName = document.querySelector('.name')
        const jobTitleContainers = document.querySelectorAll('.jobTitleContainer')
        const jobTitles = document.querySelectorAll('.jobTitle')
       
        window.addEventListener("scroll", ()=>{
            let offsetY = window.scrollY;
        
            const heightSalute = document.querySelector('.salute').clientHeight;
            const heightNameContainer = document.querySelector('.nameContainer').clientHeight;
            const heightJobTitleContainerDark = jobTitleContainers[0].clientHeight;
            
            //Sorry, I can't show all code. But don't worry, it works! 
        })
    }, []);
    return(
        <div className="intro">
            <div className="salute">
            //Sorry, I can't show all code. But don't worry, it works! 
                

            </div>
            <div className="nameContainer">
            //Sorry, I can't show all code. But don't worry, it works! 
            </div>

            
        </div>
    )
}
