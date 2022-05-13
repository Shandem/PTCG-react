import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../App';

import Gamebord from '../comp/Gamebord'

export default (

    <Switch>
        <Route exact path='/' />
        <Route path='/gamebord' component={Gamebord}/>
        
    </Switch>
)