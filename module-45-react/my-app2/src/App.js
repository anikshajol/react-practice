import { useEffect, useState } from "react";
import "./App.css";

// function App() {
//   const products = [
//     {name:'laptop', price:55000},
//     {name:'Phone', price:30000},
//     {name:'Watch', price:3000, brand: 'Fossil'}
//   ];

//   return (

//     <div className="App">

// {
//    products.map(product=><Product name={product.name} price={product.price} brand={product.brand}></Product>)

// }
//       {/* <Product name= "Laptop" price="34000" ></Product>
//       <Product name= "Phone" price="95000" ></Product> */}
//     </div>
//   );
// }

// function Product (props) {
//   return (

//     <div className='product'>
//       <h2>Name: {props.name}</h2>
//       <p>Price: {props.price}</p>
//       <p>{props.brand}</p>
//     </div>

//   )
// }

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div style={{ border: "2px solid purple", margin: "1rem" }}>
      <h2>Name-{props.name}</h2>
      <p>Email-{props.email}</p>
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () =>{
  //   const newCount = count+1;
  //   setCount(newCount)
  // }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

export default App;
