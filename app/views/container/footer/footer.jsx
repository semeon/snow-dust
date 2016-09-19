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
		  <footer className="toolbar toolbar-footer">
				<h1 className="title pull-left">&nbsp;Datafile: {datafilePath}</h1>
		  </footer>			
    )
  }
}