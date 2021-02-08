import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import AccCreate from "./Components/AccountCreate";
import Login from "./Components/Login";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const results = await axios
      .get("http://localhost:4000/post")
      .then((response) => {
        setPosts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Welcome to the scroll</h1>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/creatacc" exact render={() => <AccCreate />} />
        <Route path="/Login" exact render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
