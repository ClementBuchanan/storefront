
import './app.css';
import Header from './components/header/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} /> */}
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;