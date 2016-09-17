// let appRoot = require('app-root-path')
// let jsonfile = require('jsonfile')
//
// import {Renderer} from '/app/js/renderer/renderer.js'
//
//
// class AppState {
// 	constructor() {
// 		this.state = {}
// 		this.renderer = new Renderer()
// 		this.settings = jsonfile.readFileSync(appRoot.path + '/config/settings.json')
// 		this.setDefaults()
// 	}
//
// 	setDefaults() {
// 		this.state.view = "datafile"
// 		this.state.datafile = null
// 		if (this.settings.dataFilePath) this.state.datafile = this.settings.dataFilePath
// 		console.log(this.state.datafile)
// 	}
//
// 	update(field, value) {
// 		if (field && value) {
// 			console.log("App State: Update")
// 			console.log("-- Field: " + field)
// 			console.log("-- Value: " + value)
// 			this.state[field] = value
// 		}
//
// 		console.dir("State:")
// 		console.dir(this.state)
//
// 		console.log("App State: Render")
// 		this.renderer.render();
// 	}
//
// 	getState(field) {
// 		var	result = this.state
// 		if (field) result = this.state[field]
// 		return result
// 	}
// }
//
// export let appState = new AppState();