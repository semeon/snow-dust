import React from 'react'
import {render} from 'react-dom'

import {settingsStore} from '/app/stores/settings.js'
import {appStateStore} from '/app/stores/state.js'

import {HeaderView} from './header/header.jsx'
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
			let contentPaneView = standByView
			switch (appStateStore.getState('view')) {
			    case 'config':
			        contentPaneView = <ConfigView />
			        break; 

			    default: 
			        contentPaneView = standByView
			}

			
	    return (
				<div className="window">

					<HeaderView />

					{contentPaneView}

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