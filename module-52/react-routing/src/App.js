import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import Friends from "./Components/Friends/Friends";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import PostDetails from "./Components/PostDetails/PostDetails";
import Products from "./Components/Products/Products";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/products", element: <Products></Products> },
        { path: "/contact", element: <Contact></Contact> },
        {
          path: "/friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>,
        },
        {
          path: "post",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Post></Post>,
        },
      ],
    },
    { path: "*", element: <h2>Not found this page</h2> },
    {
      path: "/friends/:friendId",
      loader: async ({ params }) => {
        console.log(params.friendId);
        return fetch(
          `https://jsonplaceholder.typicode.com/users/${params.friendId}`
        );
      },
      element: <FriendDetails></FriendDetails>,
    },

    {
      path: "/post/:singlePostId",
      loader: async ({ params }) => {
        console.log(params);
        return fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.singlePostId}`
        );
      },
      element: <PostDetails></PostDetails>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
