let appRoot = require('app-root-path')
let jsonfile = require('jsonfile')

import {Store} from './class/storeClass.js'
import {settings} from './settings.js'

import {Datafile} from './model/datafile.js'


class ModelStore extends Store {

  constructor(props) {
    super(props)
		this.model = {}
		this.setDefaults()
  }

	setDefaults() {
		this.model = new Datafile()
	}

	createAccount(props) {
		this.model.createAccount(props)
		this.applyChange()
	}


}

export let modelStore = new ModelStore('Model')