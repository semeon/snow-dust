import React from 'react'
import ReactDOM from 'react-dom'

import {ContainerView} from '/app/views/container/container.jsx'

class Renderer {

	constructor() {
		this.id = 12132312
	}
	
	render() {
		ReactDOM.render(<ContainerView />, document.getElementById('app'))
	}
}

export let renderer = new Renderer()

