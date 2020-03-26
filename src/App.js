import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import FAQ from './FAQ';


class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route strict path='/home/'>
              <Home/>
            </Route>
            <Route exact path='/faq'>
              <FAQ/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
    }
  }

export default App;
