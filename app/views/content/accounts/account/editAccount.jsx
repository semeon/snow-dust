import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'
import {modelStore} from '/app/stores/model.js'


export class EditAccountView extends React.Component {

  constructor(props) {
    super(props)
		this.state = this.generateAccountObject()
  }

	componentWillReceiveProps() {
		let account = this.generateAccountObject()
		this.state = account
	}
	
	generateAccountObject() {

		let selectedAccountId = appStateStore.getState('selectedAccount')

		// Create blank
		let account = {
			accountType: "Cash", //REFACTOR to take defaults from settings
			accountCurrency: "CAD",  //REFACTOR to take defaults from settings
			accountStartBalance : 0
		}

		// Or load existing		
		if (selectedAccountId && selectedAccountId.length > 0) {
			let acc = modelStore.getData().accounts[selectedAccountId]
			account = {
				accountId: acc.id,
				accountName: acc.name,
				accountType: acc.type,
				accountGroup: acc.group,
				accountStartBalance: acc.startBalance,
				accountCurrency: acc.currency,
				accountExists: true,
				accountPrevName: acc.name
			}
		}		
		return account
	}

  onFieldChange(event) {
		this.setState({[event.target.name]: event.target.value})
  }
	
  saveAccountClick() {
		let accountId = modelStore.saveAccount(this.state)
		console.log('new account ID: ' + accountId)
		if (!this.state.accountExists) appStateStore.update('selectedAccount', accountId)
		appStateStore.update('view', 'accounts-transaction-list')
  }

  cancelAccountClick() {
		appStateStore.update('view', 'accounts-transaction-list')
  }

  deleteAccountClick() {
		modelStore.deleteAccount({id: this.state.accountId})
		appStateStore.update('selectedAccount', '')		
		appStateStore.update('view', 'accounts-transaction-list')
  }




  render() {
		let title = "Create New Account"
		if (this.state.accountExists) title = "Edit Account: " + this.state.accountPrevName

		let accountName = this.state.accountName ? this.state.accountName : ""
		let accountType = this.state.accountType ? this.state.accountType : ""
		let accountGroup = this.state.accountGroup ? this.state.accountGroup : ""
		let accountStartBalance = this.state.accountStartBalance ? this.state.accountStartBalance : 0
		let accountCurrency = this.state.accountCurrency ? this.state.accountCurrency : ""

		console.dir(this.state)

    return (
			<div className="padded-more">
				<h3>{title}</h3>

				<form>
				  <div className="form-group">
				    <label>Account Name</label>
				    <input name="accountName" type="text"	
							className="form-control"	placeholder="Account Name"
							value={accountName} onChange={this.onFieldChange.bind(this)} 
							></input>
				  </div>

				  <div className="form-group">
				    <label>Account Type</label>
					  <select	name="accountType" type="text" 
							className="form-control" 
							value={accountType} onChange={this.onFieldChange.bind(this)} 
							>
					    <option>Cash</option>
					    <option>Checking</option>
					    <option>Credit</option>
					    <option>Saving</option>
					  </select>
				  </div>

				  <div className="form-group">
				    <label>Account Group</label>
				    <input name="accountGroup" type="text" 
							className="form-control" placeholder="Account Group" 
							value={accountGroup} onChange={this.onFieldChange.bind(this)} 
							></input>
				  </div>

				  <div className="form-group">
				    <label>Starting Ballance</label>
				    <input name="accountStartBalance"	type="number" 
							className="form-control" placeholder="0.00"
							value={accountStartBalance}	onChange={this.onFieldChange.bind(this)} 
							></input>
				  </div>

				  <div className="form-group">
				    <label>Currecy</label>
 					  <select	name="accountCurrency" type="text"							
							className="form-control"  
							value={accountCurrency}	onChange={this.onFieldChange.bind(this)} 							
							>
					    <option>CAD</option>
					    <option>EUR</option>
					    <option>RUR</option>
					    <option>USD</option>
 					  </select>
				  </div>
				</form>		

				<hr/>

				<div className="toolbar-actions">
			    <button className="btn btn-negative" onClick={this.deleteAccountClick.bind(this)}>
			      Delete Account
			    </button>

			    <button className="btn btn-default pull-right" onClick={this.cancelAccountClick.bind(this)}>
			      Cancel
			    </button>

			    <button className="btn btn-primary pull-right" onClick={this.saveAccountClick.bind(this)}>
			      Save
			    </button>
			  </div>

			</div>

			
    )
  }
}
