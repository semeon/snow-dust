import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'


export class FooterView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
		let datafilePath = settingsStore.getSettings().datafile

    return (
				<nav className="navbar navbar-default navbar-fixed-bottom">
				  <div className="container-fluid">
				    <p className="navbar-text">Datafile: {datafilePath}</p>
				  </div>
				</nav>
    )
  }
}