import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import FAQ from './FAQ';
import quiz from './quiz';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Switch>
          <Route strict path='/home' component={Home} />
          
          <Route exact path="/faq" component={FAQ}/>

          <Route exact path="/quiz" component={quiz}/>
        </Switch>

        <Footer/>
      </Router>
    </div>
    );
}


export default App;
