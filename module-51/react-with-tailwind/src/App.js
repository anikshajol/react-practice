import "./App.css";
import Assignment from "./components/Assignment/Assignment";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <Assignment></Assignment>
    </div>
  );
}

export default App;
