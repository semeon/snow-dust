import React from 'react';
import {render} from 'react-dom';

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
			  <div className="window-content">
			    <div className="pane-group">
			      <div className="pane-sm sidebar">...</div>
			      <div className="pane">...</div>
			    </div>
			  </div>
			  <footer className="toolbar toolbar-footer">
			    <h1 className="title">Footer</h1>
			  </footer>
			</div>
    )
  }
}