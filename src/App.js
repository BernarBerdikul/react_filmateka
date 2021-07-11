import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import MovieDetail from './components/MovieDetail';
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' exact={true} component={About} />
      <Route path='/movie/:id' exact={true} component={MovieDetail} />
    </HashRouter>
  );
}

export default App;