import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'


export class CreateAccountView extends React.Component {

  constructor(props) {
    super(props)
  }
	

  cancelAccountClick() {
		console.log('CLICK')
		appStateStore.update('view', 'accounts-transaction-list')
  }

  render() {

    return (
			<div className="padded-more">
				<h3>Create a New Account</h3>

				<form>
				  <div className="form-group">
				    <label>Account Name</label>
				    <input className="form-control" placeholder="Account Name"></input>
				  </div>

				  <div className="form-group">
				    <label>Account Type</label>
					  <select className="form-control">
					    <option>Cash</option>
					    <option>Checking</option>
					    <option>Credit</option>
					    <option>Saving</option>
					  </select>
				  </div>

				  <div className="form-group">
				    <label>Start Ballance</label>
				    <input className="form-control" placeholder="0.00"></input>
				  </div>

				  <div className="form-group">
				    <label>Currecy</label>
					  <select className="form-control">
					    <option>EUR</option>
					    <option>CAD</option>
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