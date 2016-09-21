let appRoot = require('app-root-path')
let jsonfile = require('jsonfile')

import {Store} from './class/storeClass.js'

import {appStateStore} from './state.js'
import {settingsStore} from './settings.js'

// import {Datafile} from './model/datafile.js'


class ModelStore extends Store {

  constructor(props) {
    super(props)
		this.model = {}
		this.setDefaults()
  }

	setDefaults() {
		// this.model = new Datafile()

		console.log(settingsStore.settings)

 		this.model = jsonfile.readFileSync(settingsStore.settings.datafile)
		
		// console.log(this.model)
		this.applyChange()
	}

	getData() {
		return this.model
	}
	
	createAccount(props) {
		this.model.createAccount(props)
		this.applyChange()
	}


}

export let modelStore = new ModelStore({name:'Model'})