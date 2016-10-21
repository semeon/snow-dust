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
			let classString = 'list-group-item'
			if (id == selectedAccount) classString += ' active'

			let navItem = (
				<a key={id} href="#" className={classString} onClick={this.listItemClick.bind(this, id)}>
			    <h5 className="list-group-item-heading">{account.name}</h5>
			    <p className="list-group-item-text">
						<small>${account.balance} {account.currency} | {account.type}</small>
					</p>
				</a>				
			)
			navItems.push(navItem)
		}

    return (
			<div>
				<h4>Checking and Credit</h4>
				<div className="list-group">
					{navItems}
				</div>
			</div>
    )
  }
}