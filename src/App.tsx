import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {TechStack} from "./layout/sections/techstack/TechStack";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <TechStack/>
        </div>
    );
}

export default App;