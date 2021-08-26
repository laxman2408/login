import "./App.css";
import { Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
// import Layout from "antd/lib/layout/layout";
function App() {
  return (
    <div className="App">
      <Route path="/Signup" component={Signup}>
        <Signup />
      </Route>
      <Route exact path="/" component={Login}>
        <Login />
      </Route>
      <Route path="/home" component={Home}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
