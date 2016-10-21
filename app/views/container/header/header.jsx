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

		let dbBtnClass = ''
		if (currentView == 'config' ) dbBtnClass += ' active'

		let accountsBtnClass = ''
		if (currentView.indexOf('accounts-') == 0 ) accountsBtnClass += ' active'

    return (
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container-fluid">
					<ul className="nav navbar-nav">
						<li className={dbBtnClass} onClick={this.datafileClick.bind(this)} >
							<a href="#"><i className="fa fa-database" aria-hidden="true"></i> Datafile</a>
						</li>			
						<li className={accountsBtnClass} onClick={this.accountsClick.bind(this)} >
							<a href="#"><i className="fa fa-list" aria-hidden="true"></i> Accounts</a>
						</li>			
					</ul>
			  </div>
			</nav>		
    )
  }
}