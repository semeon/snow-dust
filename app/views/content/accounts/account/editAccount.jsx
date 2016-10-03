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
		let account = modelStore.createAccountObjectById(selectedAccountId)
		return account
	}

  onFieldChange(event) {
		this.setState({[event.target.name]: event.target.value})
  }
	
  saveClick() {
		let accountId = modelStore.saveAccount(this.state)
		console.log('new account ID: ' + accountId)
		if (!this.state.accountExists) appStateStore.update('selectedAccount', accountId)
		appStateStore.update('view', 'accounts-transaction-list')
  }

  cancelClick() {
		appStateStore.update('view', 'accounts-transaction-list')
  }

  deleteClick() {
		modelStore.deleteAccount({id: this.state.accountId})
		appStateStore.update('selectedAccount', '')		
		appStateStore.update('view', 'accounts-transaction-list')
  }


  render() {
		let selectedAccountId = appStateStore.getState('selectedAccount')
		let title = selectedAccountId.length==0 ? "Create New Account" : "Edit Account: " + this.state.accountName

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
			    <button 
							className={selectedAccountId.length>0 ? "btn btn-negative" : "hidden" }
							onClick={this.deleteClick.bind(this)}>
			      Delete Account
			    </button>

			    <button className="btn btn-default pull-right" onClick={this.cancelClick.bind(this)}>
			      Cancel
			    </button>

			    <button className="btn btn-primary pull-right" onClick={this.saveClick.bind(this)}>
			      Save
			    </button>
			  </div>

			</div>

			
    )
  }
}
