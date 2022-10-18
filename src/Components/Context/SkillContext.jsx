import { createContext } from "react";
import html from "../../assets/img/html-5.png"
import css from "../../assets/img/css3.png"
import javascript from "../../assets/img/javascript.png"
import react from "../../assets/img/react.png"
import bootstrap from "../../assets/img/bootstrap.png"
import github from "../../assets/img/github.png"
import git from "../../assets/img/git.png"
import firebase from "../../assets/img/firebase.png"
import TituloDesarrolloWeb from "../../assets/img/desarrolloweb.png"
import TituloJavascript from "../../assets/img/javascriptt.png"
import TituloReact from "../../assets/img/javascriptt.png"

export const SkillContext = createContext();

const SkillContextProvider= ({children}) => {
    const skill = [
        {id:1,img:html,text:"HTML"},
        {id:2,img:css,text:"CSS"},
        {id:3,img:javascript,text:"JavaScript"},
        {id:4,img:react,text:"React JS"},
        {id:5,img:github,text:"GitHub"},
        {id:6,img:firebase,text:"FireBase"},
        {id:7,img:bootstrap,text:"Bootstrap"},
        {id:8,img:git,text:"Git"},
    ]


    const estudios = [
        {id:1,img: TituloDesarrolloWeb, text:"En este curso adquiri conocimientos en las tecnologias Html, Css, GitHub, Sass/scss y Bootstrap, en el cual finalice el proyecto final con nota 10" },
        {id:2,img: TituloJavascript,text:"En este curso adquiri conocimientos en las tecnologias JavaScript, Jquery, Ajax, en el cual finalice el proyecto final con nota 10" },
        {id:3,img: TituloReact, text:"En este curso adquiri conocimientos en las tecnologias React js y Firebase, en el cual finalice el proyecto final con nota 10" },

    ]

    return (
        <SkillContext.Provider value={{ estudios , skill}}>
            {children}
        </SkillContext.Provider>
    )
}

export default SkillContextProvider;
