import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React from 'react';
import Login from './startups/Login';
import Register from './startups/Register';

import Landing from './startups/Landing'
import Gym from './Gym/Selectgym';
import Gymclass from './Gym/Selectgymclass';
import Equipments from './Admin/Equipments';
import Pay from './Gym/Payment';
import Owner from './Admin/Owner';
import Creategymclass from './Admin/Creategymclass';
import Createtrainer from './Admin/Createtrainer';
import Updateowner from './Admin/Updateowner';
import showmembers from './Admin/Showmembers';

import Memberhome from './Gym/Memberhome';
import Updatemember from './Gym/Updatemember';
import Feedback from './Gym/Feedback';


function Controller(){

return(
    
         
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/memberhome" component={Memberhome}/>
        <Route exact path="/equipments" component={Equipments}/>
        <Route exact path="/selectgym" component={Gym}/>
        <Route exact path="/selectgymclass" component={Gymclass}/>
        <Route exact path="/pay" component={Pay}/>
        <Route exact path="/owner" component={Owner}/>
<Route exact path="/creategymclass" component={Creategymclass}/>
        <Route exact path="/createtrainer" component={Createtrainer}/>
        <Route exact path="/updateowner" component={Updateowner}/>
        <Route exact path="/updatemember" component={Updatemember}/>
        <Route exact path="/showallmembers" component={showmembers}/>
        <Route exact path="/feedback" component={Feedback}/>
      </Switch>
    </Router>
         
            
)

}
export default Controller;

