import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'
import {modelStore} from '/app/stores/model.js'


export class CreateAccountView extends React.Component {

  constructor(props) {
    super(props)
  }
	
  saveAccountClick() {
		appStateStore.update('view', 'accounts-transaction-list')
  }


  cancelAccountClick() {
		appStateStore.update('view', 'accounts-transaction-list')
  }

  render() {
		let title = "Create New Account"
		let account = {}

		// READ
		// http://stackoverflow.com/questions/30146105/react-input-defaultvalue-doesnt-update-with-state

		let selectedAccountId = appStateStore.getState('selectedAccount')
		if (selectedAccountId && selectedAccountId.length > 0) {
			account = modelStore.getData().accounts[selectedAccountId]
			title = "Edit Account (ID: " + account.id + ", Name: " + account.name + ")"
		}


    return (
			<div className="padded-more">
				<h3>{title}</h3>

				<form>
				  <div className="form-group">
				    <label>Account Name</label>
				    <input className="form-control" placeholder="Account Name" defaultValue={account.name}></input>
				  </div>

				  <div className="form-group">
				    <label>Account Type</label>
					  <select className="form-control" defaultValue={account.type}>
					    <option>Cash</option>
					    <option>Checking</option>
					    <option>Credit</option>
					    <option>Saving</option>
					  </select>
				  </div>

				  <div className="form-group">
				    <label>Account Category</label>
				    <input className="form-control" placeholder="Account Category" defaultValue={account.category}></input>
				  </div>

				  <div className="form-group">
				    <label>Starting Ballance</label>
				    <input className="form-control" placeholder="0.00" defaultValue={account.startBalance}></input>
				  </div>

				  <div className="form-group">
				    <label>Currecy</label>
					  <select className="form-control"  defaultValue={account.currency}>
					    <option>CAD</option>
					    <option>EUR</option>
					    <option>RUR</option>
					    <option>USD</option>
					  </select>
				  </div>
				</form>		
			
		

				<hr/>

				<div className="toolbar-actions">
			    <button className="btn btn-default pull-right" onClick={this.cancelAccountClick.bind(this)}>
			      Cancel
			    </button>

			    <button className="btn btn-primary pull-right" onClick={this.cancelAccountClick.bind(this)}>
			      Save
			    </button>
			  </div>

			</div>

			
    )
  }
}