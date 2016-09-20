import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'


export class AccountListNavView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
			<nav className="nav-group">
			
			  <h5 className="nav-group-title">Checking and Credit</h5>
			
			  <span className="nav-group-item active">
			    <small><strong>Cash CAD</strong> <br/> $56.32</small>
			  </span>
			  <span className="nav-group-item">
			    <small><strong>TD Checking All-Inclusive</strong> <br/> $7556.75</small>
			  </span>


			  <h5 className="nav-group-title">Savings and Investments</h5>
			
			  <span className="nav-group-item">
			    <small><strong>Cash CAD</strong> <br/> $56.32</small>
			  </span>
			  <span className="nav-group-item">
			    <small><strong>TD Checking All-Inclusive</strong> <br/> $7556.75</small>
			  </span>



			</nav>
			
    )
  }
}