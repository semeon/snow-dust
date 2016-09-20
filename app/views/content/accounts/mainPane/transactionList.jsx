import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'


export class TransactionListView extends React.Component {

  constructor(props) {
    super(props)
  }

  createTransactionClick() {
		console.log('CLICK')
		appStateStore.update('view', 'accounts-create-transaction')
  }

  render() {

		let sampleRow = (
	    <tr>
	      <td>2016-09-19</td>
	      <td>AAA Market</td>
	      <td>Grocery: Food</td>
	      <td>21.15</td>
	      <td>0</td>
	      <td>722.15</td>
	      <td>Fruits and veggies</td>
	    </tr>			
		)


    return (
			

			<div className="">

				<div className="padded">
				  <button className="btn btn-mini btn-default" onClick={this.createTransactionClick.bind(this)}>
						<span className="icon icon-plus icon-text"></span> &nbsp; Add Transaction
				  </button>

				  <button className="btn btn-mini btn-default pull-right">
						<span className="icon icon-pencil icon-text"></span> &nbsp; Edit Account
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
			
						{sampleRow}
						{sampleRow}
						{sampleRow}
						{sampleRow}
			
				  </tbody>
				</table>

			</div>

			
    )
  }
}