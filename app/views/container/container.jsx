import React from 'react'
import {render} from 'react-dom'

import {settingsStore} from '/app/stores/settings.js'
import {appStateStore} from '/app/stores/state.js'

import {HeaderView} from './header/header.jsx'
import {FooterView} from './footer/footer.jsx'

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
				<div className="pane">Please stand by!!!!</div>
		)

		let contentPaneView = standByView

		if (appStateStore && settingsStore) {
			let currentView = appStateStore.getState('view')
			
			if (currentView == 'config') {
	      contentPaneView = <ConfigView />

			} else if( currentView.indexOf('accounts-') == 0 ) {
        contentPaneView = <AccountsView />

			} else {
				contentPaneView = standByView
			}       
		}

    return (
			<div className="window">
				<HeaderView />
				{contentPaneView}
			  <FooterView />
			</div>
    )

  }
}