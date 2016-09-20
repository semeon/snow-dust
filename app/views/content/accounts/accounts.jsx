import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'

import {AccountListView} from './accountList.jsx'
import {CreateAccountView} from './createAccount.jsx'


export class AccountsView extends React.Component {

  constructor(props) {
    super(props)
		
		this.state = {view: 'list-view'}
  }


  addAccountClick() {
		console.log('CLICK')
    this.setState({
      view: 'add-account-view'
    })
  }

	componentDidUpdate() {
		console.log('LOCAL STATE: ' + this.state.view)
	}


  render() {
		console.log('LOCAL STATE: ' + this.state.view)


		let createAccountBtn = (
		  <div className="toolbar-actions padded">
		    <button className="btn btn-default" onClick={this.addAccountClick.bind(this)}>
		      <span className="icon icon-list-add"></span>&nbsp; Create New Account
		    </button>
		  </div>			
		)

		let bottomPane = createAccountBtn
		if (this.state.view == 'add-account-view') {
			bottomPane = <CreateAccountView />
		}

    return (
			<div className="window-content">
		    <div className="pane-group">

		      <div className="pane">
						<AccountListView />

						{bottomPane}
			
					</div>



		    </div>
			</div>

			
    )
  }
}