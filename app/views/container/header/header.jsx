import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'


export class HeaderView extends React.Component {

  constructor(props) {
    super(props)
  }
	
	datafileClick() {
		appStateStore.update('view', 'config')
	}

	accountsClick() {
		appStateStore.update('view', 'accounts-transaction-list')
	}


  render() {
		let datafilePath = settingsStore.getSettings().datafile
		let currentView = appStateStore.getState('view')

		let dbBtnClass = 'btn btn-default'
		if (currentView == 'config' ) dbBtnClass += ' active'

		let accountsBtnClass = 'btn btn-default'
		if (currentView.indexOf('accounts-') == 0 ) accountsBtnClass += ' active'

    return (
		  <header className="toolbar toolbar-header">
		    <h1 className="title">Header</h1>

				<div className="toolbar-actions">
			    <div className="btn-group">
			      <button className={dbBtnClass} onClick={this.datafileClick.bind(this)}>
			        <span className="icon icon-database"></span>
			      </button>
			      <button className={accountsBtnClass} onClick={this.accountsClick.bind(this)}>
			        <span className="icon icon-list"></span>
			      </button>
			    </div>

		      <button className="btn btn-default">
		        <span className="icon icon-floppy"></span>
		      </button>
			  </div>

		  </header>		
    )
  }
}