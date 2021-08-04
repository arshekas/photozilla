import './App.css';
import Search from './components/Search/Search';
import Photos from './components/Photos/Photos';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header';
import Favourite from './components/Favourite/Favourite';
import Homepage from './pages/Homepage/Homepage';


function App() {
  
  return (
    <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/favourite" component={Favourite} />
        </Router>
    </div>
  );
}

export default App;
