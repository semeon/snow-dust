import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'

import {AccountListNavView} from './accountListNav.jsx'

import {EditAccountView} from './account/editAccount.jsx'
import {TransactionListView} from './account/transactionList.jsx'

import {EditTransactionView} from './transaction/editTransaction.jsx'



export class AccountsView extends React.Component {

  constructor(props) {
    super(props)
  }


  addAccountClick() {
		appStateStore.update('selectedAccount', '')
		appStateStore.update('view', 'accounts-edit-account')
  }


  render() {
		let stub = <div><h3>Transaction Lists</h3></div>
		let mainPane

		let currentView = appStateStore.getState('view')
		
		if (currentView == 'accounts-transaction-list') {
			
			let selectedAccountId = appStateStore.getState('selectedAccount')

			if (selectedAccountId) {
				mainPane = <TransactionListView />
			} else {
				mainPane = <div className="padded-more">Please choose the account</div>
			}


		} else if (currentView == 'accounts-edit-account') {
			mainPane = <EditAccountView />

		} else if (currentView == 'accounts-edit-transaction') {
			mainPane = <EditTransactionView />


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