import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React from 'react';
import Login from './startups/Login';
import Register from './startups/Register';

import Home from './startups/Home'
import Gym from './Gym/Selectgym';
import Gymclass from './Gym/Selectgymclass';
import Equipments from './Admin/Equipments';
import Pay from './Gym/Payment';


function Controller(){

return(
    <>
         
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route exact path="/register" component={Register}/>
    
        <Route exact path="/equipments" component={Equipments}/>
        <Route exact path="/gym" component={Gym}/>
        <Route exact path="/selectgymclass" component={Gymclass}/>
        <Route exact path="/pay" component={Pay}/>
      </Switch>
    </Router>
         
            </>
)

}
export default Controller;

