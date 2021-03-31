import Weather from "./Weather";
import './App.css';

export default function App() {

   return ( <div className="App">
     <div className="container"> 
     <h1 className="title">Weather of the Day</h1>
     <Weather defaultCity= "Montreal" />
     
    <footer><a href="https://github.com/ddepierre2/D_Weather_React" target="_blank" rel="noreferrer" className="open-source-info">Open Source</a> code created by Dana De Pierre</footer>
    </div>
    </div>
  );
}

