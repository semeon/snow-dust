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
		this.editTransaction()
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
			if (transaction.type == "Debit") debit = transaction.amount
			
			let classValue = (transaction.id == selectedTransactionId) ? "active" : ""
			
			let listItem = (
		    <tr id={transaction.id}	key={transaction.id} 	className={classValue}
					onClick={this.selectTransaction.bind(this, transaction.id)}
					onDoubleClick={this.transactionDoubleClick.bind(this, transaction.id)}
					>
		      <td>{transaction.date}</td>
		      <td>{transaction.category}: {transaction.category}</td>
		      <td>{debit}</td>
		      <td>{withdraw}</td>
		      <td>0</td>
		      <td>{transaction.notes}</td>
		    </tr>	
			) 

			transactionListItems.push(listItem)
		}

		
		
    return (


			<div>

				<div className="padded">
					<p><strong>{selectedAccount.name}</strong> ${selectedAccount.balance} ({selectedAccount.type} | {selectedAccount.currency})
						<button className="btn btn-mini btn-default pull-right"  onClick={this.editAccount.bind(this)}>
							<span className="icon icon-pencil icon-text"></span> &nbsp; Edit Account
					  </button>
					</p> 
				</div>

				<div className="padded">
				  <button className="btn btn-mini btn-primary" onClick={this.createTransaction.bind(this)}>
						<span className="icon icon-plus icon-text"></span> &nbsp; Add Transaction
				  </button>
			
					&nbsp;&nbsp;&nbsp;&nbsp;

				  <button className={ selectedTransactionId.length>0 ? "btn btn-mini btn-default" : "btn btn-mini btn-default hidden"} 
									onClick={this.editTransaction.bind(this)}>
						<span className="icon icon-pencil icon-text"></span> &nbsp; Edit Transaction
				  </button>

				</div>

				<table className="table-striped custom-transaction-list">
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