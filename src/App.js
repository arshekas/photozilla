import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Favourite from './components/Favourite/Favourite';
import Homepage from './pages/Homepage/Homepage';
import Docs from './components/Docs/Docs';


function App() {
  
  return (
    <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/favourite" component={Favourite} />
          <Route exact path="/docs" component={Docs} />
        </Router>
    </div>
  );
}

export default App;
