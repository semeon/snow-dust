import {Store} from './class/storeClass.js'

class StateStore extends Store {

  constructor(props) {
    super(props)
		this.state = {}
		this.setDefaults()
  }

	setDefaults() {
		// this.state.view = "config"
		this.state.view = "account"
		this.state.selectedAccount = "default"
	}

	update(field, value) {
		if (field && value) {
			console.log("STORE: " + this.storeName + " Store Update:")
			console.log("-- Field: " + field)
			console.log("-- Value: " + value)
			this.state[field] = value
		}
		this.applyChange()
	}

	getState(field) {
		let	result = this.state
		if (field) result = this.state[field]
		return result
	}

}

export let appStateStore = new StateStore({name:'AppState'})