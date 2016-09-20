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

		      <div className="pane">
						<table className="table-striped">
						  <thead>
						    <tr>
						      <th>Property</th>
						      <th>Value</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>File path</td>
						      <td>{datafilePath}</td>
						    </tr>
						    <tr>
						      <td>Edited</td>
						      <td>2016-09-12 5:35 pm</td>
						    </tr>
						  </tbody>
						</table>
			
					  <div className="toolbar-actions padded">
					    <button className="btn btn-default">
					      <span className="icon icon-folder"></span>&nbsp; Open Datafile
					    </button>

					    <button className="btn btn-default">
					      <span className="icon icon-doc-text"></span>&nbsp; Create New Datafile
					    </button>
					  </div>
					</div>



		    </div>
			</div>

			
    )
  }
}