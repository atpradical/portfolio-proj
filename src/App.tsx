import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {TechStack} from "./layout/sections/techstack/TechStack";
import {Projects} from "./layout/sections/projects/Projects";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <TechStack/>
            <Projects/>
        </div>
    );
}

export default App;