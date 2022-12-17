
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import DonateScreen from './pages/DonateScreen';
import InvolvedScreen from './pages/InvolvedScreen';
import ProductsScreen from './pages/ProductsScreen';
import RegistrationScreen from './pages/RegistrationScreen';
import LoginScreen from './pages/LoginScreen';
import ProfileScreen from './pages/ProfileScreen';
import LayoutRoute from './components/LayoutRoute';
import GuestLayoutRoute from './components/GuestLayoutRoute';
import PrivateLayoutRoute from './components/PrivateLayoutRoute';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <LayoutRoute path="/donate" exact={true} component={DonateScreen} />
        <LayoutRoute path="/involved" exact={true} component={InvolvedScreen} />
        <LayoutRoute path="/products" exact={true} component={ProductsScreen} />
        <GuestLayoutRoute path="/register" exact={true} component={RegistrationScreen} />
        <GuestLayoutRoute path="/login" exact={true} component={LoginScreen} />
        <LayoutRoute path="/profile" exact={true} component={ProfileScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;