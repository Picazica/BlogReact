import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import NewPost from "./components/NewPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavBar token={token} setToken={setToken} />
          <Switch>
            <Route exact path="/">
              <Home token={token} />
            </Route>
            <PrivateRoute path="/newBlog" component={NewPost} token={token} />
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/login">
              <Login setToken={setToken} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
