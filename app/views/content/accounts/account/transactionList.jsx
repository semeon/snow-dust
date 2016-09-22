import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'
import {modelStore} from '/app/stores/model.js'

export class TransactionListView extends React.Component {

  constructor(props) {
    super(props)
  }

  editAccountClick() {
		appStateStore.update('view', 'accounts-edit-account')
  }

  createTransactionClick() {
		appStateStore.update('selectedTransaction', '')
		appStateStore.update('view', 'accounts-edit-transaction')
  }

  // transactionSingleClick(transactionId, event) {
  // 		appStateStore.update('selectedTransaction', transactionId)
  // }

  transactionDoubleClick(transactionId, event) {
		// appStateStore.update('selectedTransaction', transactionId)
		appStateStore.update('view', 'accounts-edit-transaction')
  }


  render() {

		let sampleRow1 = (
	    <tr id="transaction-id-001" 
				className="active"
				onDoubleClick={this.transactionDoubleClick.bind(this, 'transaction-id-001')}
				>
	      <td>2016-09-19</td>
	      <td>AAA Market</td>
	      <td>Grocery: Food</td>
	      <td>21.15</td>
	      <td>0</td>
	      <td>722.15</td>
	      <td>Fruits and veggies</td>
	    </tr>			
		)


		let sampleRow = (
	    <tr 
				onDoubleClick={this.transactionDoubleClick.bind(this)}
				>
	      <td>2016-09-19</td>
	      <td>AAA Market</td>
	      <td>Grocery: Food</td>
	      <td>21.15</td>
	      <td>0</td>
	      <td>722.15</td>
	      <td>Fruits and veggies</td>
	    </tr>			
		)

		let selectedAccountId = appStateStore.getState('selectedAccount')
		let selectedAccount = modelStore.getData().accounts[selectedAccountId]
		
    return (


			<div>

				<div className="padded">
					<p><strong>{selectedAccount.name}</strong> ${selectedAccount.balance} ({selectedAccount.type} | {selectedAccount.currency})
						<button className="btn btn-mini btn-default pull-right"  onClick={this.editAccountClick.bind(this)}>
							<span className="icon icon-pencil icon-text"></span> &nbsp; Edit Account
					  </button>
					</p> 
				</div>

				<div className="padded">
				  <button className="btn btn-mini btn-primary" onClick={this.createTransactionClick.bind(this)}>
						<span className="icon icon-plus icon-text"></span> &nbsp; Add Transaction
				  </button>
					&nbsp;&nbsp;&nbsp;&nbsp;
				  <button className="btn btn-mini btn-default" onClick={this.createTransactionClick.bind(this)}>
						<span className="icon icon-pencil icon-text"></span> &nbsp; Edit Transaction
				  </button>

				</div>

				<table className="table-striped">
				  <thead>
				    <tr>
				      <th>Date</th>
				      <th>Payee</th>
				      <th>Category</th>
				      <th>Credit</th>
				      <th>Debit</th>
				      <th>Balance</th>
				      <th>Comment</th>
				    </tr>
				  </thead>
				  <tbody>
			
						{sampleRow1}
						{sampleRow}
						{sampleRow}
						{sampleRow}
			
				  </tbody>
				</table>

			</div>

			
    )
  }
}