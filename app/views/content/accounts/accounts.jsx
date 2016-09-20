import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'

import {AccountListNavView} from './accountListNav.jsx'
import {CreateAccountView} from './createAccount.jsx'


export class AccountsView extends React.Component {

  constructor(props) {
    super(props)
  }


  addAccountClick() {
		console.log('CLICK')
  }


  render() {

		let mainPane = <div><h3>Transaction Lists</h3></div>







    return (
			
		  <div className="window-content">
		    <div className="pane-group">
		      <div className="pane-sm sidebar">
						<AccountListNavView />

			
						<hr/>
			
					  <div className="toolbar-actions">
					    <button className="btn btn-default pull-center" onClick={this.addAccountClick.bind(this)}>
					      <span className="icon icon-list-add"></span>&nbsp; Add Account
					    </button>
					  </div>	
			
					</div>

		      <div className="pane">
						{mainPane}
					</div>

		    </div>
		  </div>
			
    )
  }
}