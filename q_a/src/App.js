import logo from './logo.svg';
import './App.css';
import {Nav, Footer, About, Contact, Home, Answer, Login} from "./components/Routes"
import { Route,Switch } from 'react-router-dom'
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' render={() => 
        <Fragment>
          <Home />
          <Answer />
          </Fragment>} />
        <Route path='/about' exact component={() => <About />} />
        <Route path='/contact' exact component={() => <Contact />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;