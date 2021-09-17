import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/TicTacToe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Start from './components/Start';


function App() {
  
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Start}>
        <Start   />
      </Route>
      <Route path="/game" component={TicTacToe}>
        <TicTacToe  />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
