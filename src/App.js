import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import { createContext } from 'react';

export const UserContext = createContext();

function App() {
  const user = {name: 'KoduMia', email:'kodu@modu.com'}
  return (
    <div>
      <UserContext.Provider value={user.name}>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
            </Route>
            <Route>
              <Login></Login>
            </Route>
            <Route path="*">
                <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
