import React from 'react'
import {render} from 'react-dom'

import {settingsStore} from '/app/stores/settings.js'
import {appStateStore} from '/app/stores/state.js'

import {HeaderView} from './header/header.jsx'
import {FooterView} from './footer/footer.jsx'

import {SingleAccountView} from '../content/account/account.jsx'
import {ConfigView} from '../content/config/config.jsx'
import {AccountsView} from '../content/accounts/accounts.jsx'


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

		console.log('Container View: ' + appStateStore.getState('view'))


		if (appStateStore && settingsStore) {
			let contentPaneView = standByView
			switch (appStateStore.getState('view')) {
			    case 'config':
			        contentPaneView = <ConfigView />
			        break; 

			    case 'account':
			        contentPaneView = <SingleAccountView />
			        break; 

			    case 'accounts':
			        contentPaneView = <AccountsView />
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