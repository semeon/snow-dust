import React from 'react'
import ReactDOM from 'react-dom'

import {ContainerView} from '/app/views/container/container.jsx'

export class Renderer {

	constructor() {
	}
	
	render() {
		ReactDOM.render(<ContainerView />, document.getElementById('app'))
	}
}


