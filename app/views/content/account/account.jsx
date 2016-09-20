import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'

import {AccountListNavView} from './accountListNav.jsx'
import {CreateAccountView} from './createAccount.jsx'


export class SingleAccountView extends React.Component {

  constructor(props) {
    super(props)
		this.state = {view: 'transaction-list'}
  }


  addAccountClick() {
		console.log('CLICK')
    this.setState({
      view: 'create-account-view'
    })
  }

	componentDidUpdate() {
		console.log('LOCAL STATE: ' + this.state.view)
	}


  render() {
		console.log('LOCAL STATE: ' + this.state.view)

		let mainPane = <div><h3>Transaction Lists</h3></div>


		if ( this.state.view == 'create-account-view') {
			mainPane = <CreateAccountView />
		}




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