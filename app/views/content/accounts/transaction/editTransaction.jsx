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

		// Create blank
		let transaction = {
			accountId: selectedAccountId,
			transactionType: "Withdrawal", //REFACTOR to take defaults from settings
			transactionCategory: "",
			transactionSubcategory: "",
			transactionNotes : ""
		}

		// Or load existing
		if (selectedTransactionId && selectedTransactionId.length > 0) {
			let trns = modelStore.getTransaction(selectedTransactionId)
			transaction = {
				transactionId: trns.id,
				transactionDate: trns.date,
				transactionAmount: trns.amount,
				accountId: trns.accountId,
				transactionType: trns.type,
				transactionCategory: trns.category,
				transactionSubcategory: trns.subcategory,
				transactionNotes: trns.notes,
				
				transactionExists: true
			}
		}		
		return transaction
	}

  onFieldChange(event) {
		this.setState({[event.target.name]: event.target.value})
  }

  cancelClick() {
		console.log('CLICK')
		appStateStore.update('view', 'accounts-transaction-list')
  }

  render() {

		let selectedTransactionId = appStateStore.getState('selectedTransaction')

		let title = "Create New Transaction"
		if (this.state.transactionExists) title = "Edit Transaction"


		let transactionDate = this.state.transactionDate ? this.state.transactionDate : ""
		let transactionType = this.state.transactionType ? this.state.transactionType : "" 


		console.log("--- CREATE/EDIT TRANSACTION VIEW ---")
		console.log("selectedTransactionId: ", selectedTransactionId)
		console.log("transactionDate: ", transactionDate)


    return (
			<div className="padded-more">
				<h3>{title}</h3>

				<form>

						
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

				  <div className="form-group">
				    <label>Account</label>
				    <input className="form-control" placeholder="Account"></input>
				  </div>

				  <div className="form-group">
				    <label>Transaction Date</label>
				    <input name="transactionDate" type="text"	
							className="form-control"	placeholder="Transaction Date"
							value={transactionDate} onChange={this.onFieldChange.bind(this)} 
							></input>									
				  </div>



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

				  <div className="form-group">
				    <label>Amount</label>
				    <input className="form-control" placeholder="Subcategory"></input>
				  </div>

				  <div className="form-group">
				    <label>Comment</label>
				    <input className="form-control" placeholder="Comment"></input>
				  </div>			

				</form>		
			
		

				<hr/>

				<div className="toolbar-actions">
			    <button className="btn btn-default pull-right" onClick={this.cancelClick.bind(this)}>
			      Cancel
			    </button>

			    <button className="btn btn-primary pull-right" onClick={this.cancelClick.bind(this)}>
			      Save
			    </button>
			  </div>

			</div>

			
    )
  }
}