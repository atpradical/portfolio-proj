import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {TechStack} from "./layout/sections/techstack/TechStack";
import {Projects} from "./layout/sections/projects/Projects";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contacts} from "./layout/sections/contatcs/Contacts";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <TechStack/>
            <Projects/>
            <Testimony/>
            <Contacts/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;