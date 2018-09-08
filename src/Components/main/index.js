import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Series from '../containers/series'

 const Main = props =>(

	<Switch>
      <Route   exact path='/' component={Series} />
      

	</Switch>

)
export default Main;
