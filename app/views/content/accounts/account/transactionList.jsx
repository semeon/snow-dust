import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'
import {modelStore} from '/app/stores/model.js'

export class TransactionListView extends React.Component {

  constructor(props) {
    super(props)
  }

  editAccount() {
		appStateStore.update('view', 'accounts-edit-account')
  }

  createTransaction() {
		appStateStore.update('selectedTransaction', '')
		appStateStore.update('view', 'accounts-edit-transaction')
  }

  selectTransaction(transactionId, event) {
  		appStateStore.update('selectedTransaction', transactionId)
  }

  transactionDoubleClick(transactionId, event) {
		appStateStore.update('selectedTransaction', transactionId)
		appStateStore.update('view', 'accounts-edit-transaction')
		// this.editTransaction()
  }

  editTransaction() {
		appStateStore.update('view', 'accounts-edit-transaction')
  }


  render() {


		let selectedAccountId = appStateStore.getState('selectedAccount')
		let selectedAccount = modelStore.getAccount(selectedAccountId)
		let transactions = modelStore.getTransactions(selectedAccountId)
		let selectedTransactionId = appStateStore.getState('selectedTransaction')

		let transactionListItems = []
		
		for (let i in transactions) {
			let transaction = transactions[i]
			
			let withdraw = 0
			let debit = 0
			
			if (transaction.type == "Withdrawal") withdraw = transaction.amount
			if (transaction.type == "Deposit") debit = transaction.amount
			
			let classValue = (transaction.id == selectedTransactionId) ? "active" : ""
			
			let listItem = (
		    <tr id={transaction.id}	key={transaction.id} 	className={classValue}
					onClick={this.selectTransaction.bind(this, transaction.id)}
					onDoubleClick={this.transactionDoubleClick.bind(this, transaction.id)}
					>
		      <td>{transaction.date}</td>
		      <td>{transaction.category}: {transaction.subcategory}</td>
		      <td>{debit}</td>
		      <td>{withdraw}</td>
		      <td>0</td>
		      <td>{transaction.notes}</td>
		    </tr>	
			) 

			transactionListItems.push(listItem)
		}

		
		
    return (


			<div className="panel panel-default">

			  <div className="panel-heading">
					<h3 className="panel-title">Account: {selectedAccount.name} | {selectedAccount.type} | {selectedAccount.currency}</h3>
				</div>
					
			  <div className="panel-body">
			    <p>
						Balance: ${selectedAccount.balance}
					</p>

					<div className="btn-toolbar" role="toolbar" aria-label="...">
					  <div className="btn-group btn-group-xs" role="group" aria-label="...">
						  <button type="button" className="btn btn-primary" 
											onClick={this.createTransaction.bind(this)}>
								Add Transaction
						  </button>
						  <button type="button" className={ selectedTransactionId.length>0 ? "btn btn-mini btn-default" : "btn btn-mini btn-default disabled"} 
											onClick={this.editTransaction.bind(this)}>
								Edit Transaction
						  </button>
						</div>
						
					  <div className="btn-group btn-group-xs pull-right" role="group" aria-label="...">
							<button type="button" className="btn btn-default" onClick={this.editAccount.bind(this)}>
								Edit Account
						  </button>
  					</div>
					</div>
							
			  </div>

				<table className="table table-striped table-condensed">
				  <thead>
				    <tr>
				      <th>Date</th>
				      <th>Category</th>
				      <th>Debit</th>
				      <th>Credit</th>
				      <th>Balance</th>
				      <th>Comment</th>
				    </tr>
				  </thead>
				  <tbody>
						{transactionListItems}
				  </tbody>
				</table>

			</div>

			
    )
  }
}