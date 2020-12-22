import Header from "./Header";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      
      <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path="/login">
          <Login />
      </Route>
      <Route path="/">
      <Header />
      <Home />
      </Route>
   
      </Switch>
    </Router>
    </div>
  );
}

export default App;
