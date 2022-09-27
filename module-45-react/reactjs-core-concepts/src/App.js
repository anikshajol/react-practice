import "./App.css";

function App() {
  const names = ["Anik Hasan", "Alifa", "Sadika Sultana", "shima", "Syha"];
  return (
    <div className="App">

      {names.map((name) => (
        <li > Name: {name} </li>
      ))}

      {
       names.map((name)=> <Person name= {name} ></Person>)
      }

      {/* <Person name={names[0]} skill="Javascript"></Person>
      <Person name={names[1]} rel="sister"></Person>
      <h1>New Component</h1>
      <Family mother="Sadika Sultana" wife="Shima" Child="Syha"></Family> */}

    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>
        {props.skill} {props.rel}
      </p>
    </div>
  );
}

function Family(props) {
  return (
    <div className="person">
      <h2>{props.mother}</h2>
      <h2>{props.wife}</h2>
      <h2> {props.Child} </h2>
    </div>
  );
}

export default App;
