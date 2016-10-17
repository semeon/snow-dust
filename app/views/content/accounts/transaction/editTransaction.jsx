import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'
import {modelStore} from '/app/stores/model.js'

export class EditTransactionView extends React.Component {

  constructor(props) {
    super(props)
		this.state = this.generateTransactionObject()
  }

	componentWillReceiveProps() {
		this.state = this.generateTransactionObject()
	}

	generateTransactionObject() {
		let selectedAccountId = appStateStore.getState('selectedAccount')		
		let selectedTransactionId = appStateStore.getState('selectedTransaction')
		let transaction = modelStore.createTransactionObjectById(selectedAccountId, selectedTransactionId)
		return transaction
	}

  onFieldChange(event) {
		this.setState({[event.target.name]: event.target.value})
  }

  saveClick() {
		let transactionId = modelStore.saveTransaction(this.state)
		appStateStore.update('selectedAccount', this.state.accountId)
		appStateStore.update('selectedTransaction', transactionId)
		appStateStore.update('view', 'accounts-transaction-list')
  }

  cancelClick() {
		appStateStore.update('view', 'accounts-transaction-list')
  }

  deleteClick() {
		// modelStore.deleteAccount({id: this.state.accountId})
		// appStateStore.update('selectedAccount', '')
		// appStateStore.update('view', 'accounts-transaction-list')
  }
	

  render() {

		let selectedTransactionId = appStateStore.getState('selectedTransaction')

		let title = "Create New Transaction"
		if (this.state.transactionExists) title = "Edit Transaction"


		let transactionDate = this.state.transactionDate ? this.state.transactionDate : ""
		let transactionType = this.state.transactionType ? this.state.transactionType : "" 
		let accountId = this.state.accountId ? this.state.accountId : ""
		let transactionAmount = this.state.transactionAmount ? this.state.transactionAmount : 0
		let transactionCategory = this.state.transactionCategory ? this.state.transactionCategory : ""
		let transactionNotes = this.state.transactionNotes ? this.state.transactionNotes : "" 

		console.log("--- CREATE/EDIT TRANSACTION VIEW ---")
		console.dir(this.state)

		let accounts = modelStore.getAccounts()
		let accountSelectOptions = []
		for (let i in accounts) {
			let acc = accounts[i]
			let optionNode = <option key={acc.id} value={acc.id}>{acc.name} ({acc.type}, {acc.currency})</option>
			accountSelectOptions.push(optionNode)
		}


    return (
			<div className="padded-more">
				<h3>{title}</h3>

				<form>

				

					{
						// 	Withdrawal / Deposit 
				    // ========================================
					}
			    
				  <div className="form-group">
					  <div className="radio">
					    <label>
					      <input type="radio" name="transactionType"
									value="Withdrawal"
									checked={transactionType=='Withdrawal'} 
									onChange={this.onFieldChange.bind(this)} />
					      Withdrawal
					    </label>
							
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			
					    <label>
					      <input type="radio" name="transactionType" 
									value="Deposit"
									checked={transactionType=='Deposit'} 
									onChange={this.onFieldChange.bind(this)} />
					      Deposit
					    </label>
					  </div>
					</div>

					{
						// 	Account
				    // ========================================
					}

				  <div className="form-group">
				    <label>Account</label>
					  <select	name="accountId" type="text" 
							className="form-control" 
							value={accountId} onChange={this.onFieldChange.bind(this)} 
							>
							{accountSelectOptions}
					  </select>
				  </div>


					{
						// 	Date
				    // ========================================
					}
				  <div className="form-group">
				    <label>Transaction Date</label>
				    <input name="transactionDate" type="text"	
							className="form-control"	placeholder="Transaction Date"
							value={transactionDate} onChange={this.onFieldChange.bind(this)} 
							></input>									
				  </div>

					{
						// 	Category
				    // ========================================
					}

				  <div className="form-group">
				    <label>Category</label>
				    <input name="transactionCategory" type="text"	
							className="form-control"	placeholder="Category"
							value={transactionCategory} onChange={this.onFieldChange.bind(this)} 
							></input>						

				  </div>
					
					
							
					{/*

				  <div className="form-group">
				    <label>Payee</label>
				    <input className="form-control" placeholder="Payee"></input>
				  </div>

				  <div className="form-group">
				    <label>Category</label>
				    <input className="form-control" placeholder="Category"></input>
				  </div>

				  <div className="form-group">
				    <label>Subcategory</label>
				    <input className="form-control" placeholder="Subcategory"></input>
				  </div>

					*/}

				  <div className="form-group">
				    <label>Amount</label>
				    <input name="transactionAmount"	type="number" 
							className="form-control" placeholder="0.00"
							value={transactionAmount}	onChange={this.onFieldChange.bind(this)} 
							></input>
				  </div>
						

				  <div className="form-group">
				    <label>Notes</label>
				    <input name="transactionNotes" type="text"	
							className="form-control"	placeholder="Notes"
							value={transactionNotes} onChange={this.onFieldChange.bind(this)} 
							></input>
				  </div>			

				</form>		
			
		

				<hr/>


				<div className="toolbar-actions">
			    <button className="btn btn-negative" onClick={this.deleteClick.bind(this)}>
			      Delete Transaction
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