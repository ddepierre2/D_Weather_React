import Weather from "./Weather";
import './App.css';

export default function App() {

   return ( <div className="App">
     <div className="container"> 
     <h1 className="title">Weather of the Day</h1>
     <Weather />
     
    <footer><a href="https://github.com/ddepierre2/D_Weather_React" target="_blank" 
    rel="noreferrer" class="open-source-info">Open Source</a> code by Dana De Pierre</footer>
    </div>
    </div>
  );
}

