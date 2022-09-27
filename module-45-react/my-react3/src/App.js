// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

// Api calling

const LoadComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h2>{comments.length}</h2>
      {comments.map((comment) => (
        <Comment
          name={comment.name}
          email={comment.email}
          body={comment.body}
        ></Comment>
      ))}
    </div>
  );
};

// map components

const Comment = (props) => {
  return (
    <div className="comment">
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email} </h3>
      <p>{props.body}</p>
    </div>
  );
};

// set count

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h2>Count:{count < 0 ? handleDecrease == false : count} </h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default App;
