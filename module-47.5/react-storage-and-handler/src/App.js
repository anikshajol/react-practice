import "./App.css";
import Cosmetics from "./components/cosmetics/Cosmetics";
import FakeData from "./components/FakeData/FakeData";
import Shoes from "./components/Shoes/Shoes";

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <FakeData></FakeData>
    </div>
  );
}

export default App;
