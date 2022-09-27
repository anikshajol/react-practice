import "./App.css";

import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// bangla system
// const LoadCountries = () => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);

//   return (
//     <div>
//       <h2>Name:{countries.length}</h2>

//       {countries.map((country) => (
//         <Country
//           name={country.name.common}
//           population={country.population}
//           flags={country.flags.png}
//         ></Country>
//       ))}
//     </div>
//   );
// };

// function Country(props) {
//   return (
//     <div
//       style={{
//         backgroundColor: "black",
//         border: "1px solid purple",
//         margin: "1rem",
//         color: "white",
//         padding: "0.5rem",
//         borderRadius: "0.8rem",
//       }}
//     >
//       <h2>{props.name}</h2>
//       <h3>{props.population}</h3>
//       <img src={props.flags} alt="" />
//     </div>
//   );
// }

export default App;
