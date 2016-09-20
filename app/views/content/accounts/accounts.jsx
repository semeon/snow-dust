import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'

import {AccountListNavView} from './accountListNav.jsx'

import {CreateAccountView} from './mainPane/createAccount.jsx'
import {CreateTransactionView} from './mainPane/createTransaction.jsx'

import {TransactionListView} from './mainPane/transactionList.jsx'


export class AccountsView extends React.Component {

  constructor(props) {
    super(props)
  }


  addAccountClick() {
		console.log('CLICK')
		appStateStore.update('view', 'accounts-create-account')
  }


  render() {
		let stub = <div><h3>Transaction Lists</h3></div>
		let mainPane

		let currentView = appStateStore.getState('view')
		
		if (currentView == 'accounts-transaction-list') {
			mainPane = <TransactionListView />


		} else if (currentView == 'accounts-create-account') {
			mainPane = <CreateAccountView />

		} else if (currentView == 'accounts-create-transaction') {
			mainPane = <CreateTransactionView />


		} else {
			mainPane = stub

		}    


    return (
			
		  <div className="window-content">
		    <div className="pane-group">
		      <div className="pane-sm sidebar">
					  <div className="toolbar-actions">
					    <button className="btn btn-default pull-center" onClick={this.addAccountClick.bind(this)}>
					      <span className="icon icon-list-add"></span>&nbsp; Add Account
					    </button>
					  </div>	
						<hr/>
						<AccountListNavView />
					</div>

		      <div className="pane">
						{mainPane}
					</div>
		    </div>
		  </div>
			
    )
  }
}