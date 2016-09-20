import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'


export class HeaderView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
		let datafilePath = settingsStore.getSettings().datafile

		let dbBtnClass = 'btn btn-default'
		if (appStateStore.getState('view') == 'config' ) dbBtnClass += ' active'

		let accountsBtnClass = 'btn btn-default'
		if (appStateStore.getState('view') == 'accounts' ) accountsBtnClass += ' active'

    return (
		  <header className="toolbar toolbar-header">
		    <h1 className="title">Header</h1>

				<div className="toolbar-actions">
			    <div className="btn-group">
			      <button className={dbBtnClass}>
			        <span className="icon icon-database"></span>
			      </button>
			      <button className={accountsBtnClass}>
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