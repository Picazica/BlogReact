import NavBar from "./components/NavBar";
import NewPost from "./components/NewPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/newBlog">
              <NewPost />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
