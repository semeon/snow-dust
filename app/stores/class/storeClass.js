import {Renderer} from '/app/js/renderer/renderer.js'


export class Store {
	constructor(props) {
		this.storeName = props
		this.renderer = new Renderer()
	}

	setDefaults() {
		
	}


	update() {
		this.applyChange()
	}

	applyChange() {
		console.log(this.storeName + "Store: Render call")
		this.renderer.render()
	}
}
