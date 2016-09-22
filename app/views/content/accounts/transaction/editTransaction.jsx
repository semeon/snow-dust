import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'


export class EditTransactionView extends React.Component {

  constructor(props) {
    super(props)
  }

  cancelTransactionClick() {
		console.log('CLICK')
		appStateStore.update('view', 'accounts-transaction-list')
  }

  render() {

    return (
			<div className="padded-more">
				<h3>Create a New Transaction</h3>

				<form>
				  <div className="form-group">
					  <div className="radio">
					    <label>
					      <input type="radio" name="radios" defaultChecked />
					      Withdrawal
					    </label>
							
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			
					    <label>
					      <input type="radio" name="radios" />
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
				    <input className="form-control" placeholder="Transaction Date"></input>
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
			    <button className="btn btn-default pull-right" onClick={this.cancelTransactionClick.bind(this)}>
			      Cancel
			    </button>

			    <button className="btn btn-primary pull-right" onClick={this.cancelTransactionClick.bind(this)}>
			      Save
			    </button>
			  </div>

			</div>

			
    )
  }
}