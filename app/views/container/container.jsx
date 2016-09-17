import React from 'react';
import {render} from 'react-dom';

import {appState} from '/app/js/state/state.js'

import {FooterView} from './footer/footer.jsx'

import {DatafileView} from '../content/datafile/datafile.jsx'


export class ContainerView extends React.Component {

  constructor(props) {
    super(props)
  }

	componentDidUpdate() {
	}

  render() {

    return (
			<div className="window">
			  <header className="toolbar toolbar-header">
			    <h1 className="title">Header</h1>
			  </header>

				<DatafileView />

			  <FooterView />

			</div>
    )
  }
}