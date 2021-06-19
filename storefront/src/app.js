
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import ProductListing from './components/products/productListing';
import ProductDetails from './components/products/productDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;