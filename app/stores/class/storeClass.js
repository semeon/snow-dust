import {renderer} from '/app/js/renderer/renderer.js'

let counter = 0

export class Store {
	constructor(props) {
		counter++
		this.id = counter 
		this.storeName = props.name
	}

	setDefaults() {
		
	}

	update() {
		this.applyChange()
	}

	applyChange() {
		console.log("STORE: " + this.storeName + "Store: Render call")
		renderer.render()
	}
}
