import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'
import {modelStore} from '/app/stores/model.js'


export class AccountListNavView extends React.Component {

  constructor(props) {
    super(props)
  }

	listItemClick(accountId) {
		appStateStore.update('selectedAccount', accountId)
		appStateStore.update('view', 'accounts-transaction-list')
	}

  render() {

		let navItems = []

		let accounts = modelStore.getData().accounts
		let selectedAccount = appStateStore.getState('selectedAccount')
		
		for (let id in accounts) {
			let account = accounts[id]
			let classString = 'nav-group-item'
			if (id == selectedAccount) classString += ' active'

			let navItem = (
			  <span key={id} className={classString} onClick={this.listItemClick.bind(this, id)}>
			    <small><strong>{account.name}</strong> <br/> ${account.balance}</small>
			  </span>			
			)

			navItems.push(navItem)
		}
		

    return (
			<nav className="nav-group">
			
			  <h5 className="nav-group-title">Checking and Credit</h5>
				{navItems}

			</nav>
			
    )
  }
}