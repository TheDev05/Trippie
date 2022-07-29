import "./App.css";
import "animate.css";

import Home from "./components/Home";
import Nav from "./components/Nav";
import SandBox from "./components/SandBox";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <SandBox />
    </div>
  );
}

export default App;
