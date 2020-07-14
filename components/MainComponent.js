import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './Homecomponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponents';
import Dishdetail from './DishdetailComponentl';
import {DISHES} from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state= {
      dishes: DISHES,
     
    };
  }


  render()  {
    const HomePage = () => {
        return(
            <Home 
            />
        );
      }
    return (
      <div>

        <Navbar dark color="primary">

          <div className="container">
            <NavbarBrand href="/">Ristornate Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Header />
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
        </Switch>
       
        <Footer />
      </div>
    );
  }
}


export default Main;
