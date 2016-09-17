import React from 'react'
import ReactDOM from 'react-dom'

import {ContainerView} from '../../views/container.jsx'

export class Renderer {

	constructor() {
	}
	
	render() {
		ReactDOM.render(<ContainerView />, document.getElementById('app'))
	}
}


