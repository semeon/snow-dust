import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'


export class ConfigLeftNavView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

		let datafilePath = settingsStore.getSettings().datafile

    return (
      <div className="pane-sm sidebar">
			</div>
    )
  }
}