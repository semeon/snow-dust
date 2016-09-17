import {settingsStore} from '/app/stores/settings.js'
import {appStateStore} from '/app/stores/state.js'
import {modelStore} from '/app/stores/model.js'


console.log("SO FAR SO GOOD 3")

// console.dir(appStateStore)
// console.dir(settingsStore)
// console.dir(modelStore)

let newAccount = {
	id:'acc01',
	name: 'All-Inclusive Checking Account TD',
	currency: 'CAD',
	startBalance: 0,
	type: 'checking'
}
console.dir(newAccount)
// modelStore.createAccount(newAccount)


// appState.update()

console.log("SO FAR SO GOOD 4")