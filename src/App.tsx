import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/sections/main/Main";
import {CvBlock} from "layout/sections/cvblock/CvBlock";
import {TechStack} from "layout/sections/techstack/TechStack";
import {Projects} from "layout/sections/projects/Projects";
import {Contacts} from "layout/sections/contatcs/Contacts";
import {Footer} from "layout/footer/Footer";
import {Particle} from "components/particle/Particle";
import {GoTopBtn} from "components/goTopBtn/GoTopBtn";
import React from "react";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <CvBlock/>
            <TechStack/>
            <Projects/>
            <Contacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;