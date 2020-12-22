import Header from "./Header";
import {useEffect} from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
 useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
     console.log("The user is >>> ",authUser);
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        });
      }else{
        dispatch({
          type:"SET_USER",
          user:null,
        });
      }
   });
 },[]);



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
