import "./projects.css";
import phone from "./img/phone.png";
import laptop from "./img/laptop.png";
import phoneApp from "./img/screenCake.png";
import laptopApp from "./img/screenLG.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";
//Sorry, I can't show all code. But don't worry, it works! 

export default function Projects () {
    useEffect(() => {
        const projectsTitle = document.querySelector('.projectsTitle')
        const phone = document.querySelector('.phone')
        const laptop = document.querySelector('.laptop')
        
        let projectsTitlePosition = projectsTitle.getBoundingClientRect().top;
        let phonePosition = phone.getBoundingClientRect().top;
        let laptopPosition = laptop.getBoundingClientRect().top;


    //    console.log(projectsTitlePosition)
        window.addEventListener("scroll", ()=>{
            let offsetY = window.scrollY;
            console.log(offsetY)
            let offsetProjectTitle = projectsTitlePosition - offsetY;
            let offsetPhone = phonePosition - offsetY;
            let offsetLaptop = laptopPosition - offsetY;
          console.log(offsetProjectTitle)
            projectsTitle.style.transform=`translateY(${offsetProjectTitle*0.5}px)`
            phone.style.transform=`translateX(${offsetPhone}px)`
            laptop.style.transform=`translateX(${offsetLaptop}px)`
           
        })
    }, []);



    return (
        <div className="projects">
                <h1 className="projectsTitle">My projects and skills</h1>
                <div className="logos">
                   // Sorry, I can't show all code. But don't worry, it works!
                    
                
                </div>
                <div className="project">
                    <div className="phone">
                        <img src={phone} alt="" className="phoneImg" />
                        <div className="phoneScreen">
                            <img src={phoneApp} alt="" className="phoneApp" />
                        </div>
                    </div>
                    <div className="projectDetail">
                        //Sorry, I can't show all code. But don't worry, it works
                    </div>
                </div>
                <div className="project">
                    <div className="laptop">
                        //Sorry, I can't show all code. But don't worry, it works
                    </div>
                    <div className="projectDetail">
                        //Sorry, I can't show all code. But don't worry, it works
                    </div>
                </div>
                
        </div>
    )
}