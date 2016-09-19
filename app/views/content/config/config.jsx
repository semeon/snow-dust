import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'


export class ConfigView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

		let datafilePath = settingsStore.getSettings().datafile

    return (
		  <div className="window-content">
		    <div className="pane-group">
		      <div className="pane-sm sidebar">...</div>
		      <div className="pane">
						<h3>Datafile informaton</h3>
						<p>{datafilePath}</p>
					</div>
		    </div>
		  </div>
    )
  }
}