
import './App.css';
import {Link,Route,Switch } from 'react-router-dom';
import About from './About';
import Home from './home';
import Nav from './Navbar';
import Page from './notfound';
function App() {
  return (
    <div className="App">
      <Nav/>
 <Switch>
    <Route path='/' exact={true}><Home/></Route>
    <Route path="/about"><About/></Route>
    <Route path="*"><Page/></Route>
 </Switch>
    </div>
  );
}

export default App;
