import React from 'react'
import {render} from 'react-dom'

import {settingsStore} from '/app/stores/settings.js'
import {appStateStore} from '/app/stores/state.js'

import {FooterView} from './footer/footer.jsx'
import {ConfigView} from '../content/config/config.jsx'


export class ContainerView extends React.Component {

  constructor(props) {
    super(props)
  }

	componentDidUpdate() {
	}

  render() {

		let standByView = (
			<div className="window">
				<div className="pane">Please stand by!!!!</div>
			</div>				
		)

		if (appStateStore && settingsStore) {
			let contentView = standByView
			switch (appStateStore.getState('view')) {
			    case 'config':
			        contentView = <ConfigView />
			        break; 

			    default: 
			        contentView = standByView
			}

			
	    return (
				<div className="window">
				  <header className="toolbar toolbar-header">
				    <h1 className="title">Header</h1>
				  </header>
					{contentView}
				  <FooterView />
				</div>
	    )

		} else {
			console.log('Not yet')
			return (
				<div className="window">
					<div className="pane">Please stand by!!!!</div>
				</div>
			)
		}

  }
}