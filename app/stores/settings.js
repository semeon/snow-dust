let appRoot = require('app-root-path')
let jsonfile = require('jsonfile')

import {Store} from './class/storeClass.js'

class SettingsStore extends Store {

  constructor(props) {
    super(props)
		this.settings = {}
		this.setDefaults()
  }

	setDefaults() {
 		this.settings = jsonfile.readFileSync(appRoot.path + '/config/settings.json')
		this.isLoaded = true		
	}

	getSettings() {
		return this.settings
	}

}

export let settingsStore = new SettingsStore({name:'Settings'})