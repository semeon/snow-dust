let appRoot = require('app-root-path')
let jsonfile = require('jsonfile')
jsonfile.spaces = 2

import {Store} from './class/storeClass.js'

import {appStateStore} from './state.js'
import {settingsStore} from './settings.js'

// import {Datafile} from './model/datafile.js'
import {AccountModel} from './model/account.js'


class ModelStore extends Store {

  constructor(props) {
    super(props)
		this.accountModel = new AccountModel()
		this.data = {}
		this.setDefaults()
  }

	setDefaults() {
		let datafilePath = settingsStore.getSettings().datafile
		if (datafilePath && datafilePath.length > 0) {
	 		this.data = jsonfile.readFileSync(settingsStore.getSettings().datafile)
		} else {
			// this.datafile = new Datafile()
		}

		// console.log(this.model)
		this.applyChange()
	}

	getData() {
		return this.data
	}
	
	saveAccount(props) {
		let account = this.accountModel.createAccountDataRecord(props)
		let id = account.id
		this.data.accounts[id] = account
		this.saveDataToFile()
		this.applyChange()
		return account.id
	}

	deleteAccount(props) {
		// console.log("Deleting account: " + props.id)
		delete this.data.accounts[props.id]
		this.saveDataToFile()
		this.applyChange()
	}

	saveDataToFile() {
		let datafilePath = settingsStore.getSettings().datafile
		if (datafilePath && this.data) {
			jsonfile.writeFileSync(datafilePath, this.data)
		}
	}


}

export let modelStore = new ModelStore({name:'Model'})