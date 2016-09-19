// I STILL DON'T UNDERSTAND WHY I NEED THIS HERE BUT I DO:
  import {renderer} from '/app/js/renderer/renderer.js'


import {appStateStore} from '/app/stores/state.js'
console.log("[1] APP STATE STORE LOADED")
console.dir(appStateStore)

import {settingsStore} from '/app/stores/settings.js'
console.log("[2] SETTINGS STORE LOADED")
console.dir(settingsStore)




// import {modelStore} from '/app/stores/model.js'


console.log("SO FAR SO GOOD 3")

// console.dir(modelStore)

let newAccount = {
	id:'acc01',
	name: 'All-Inclusive Checking Account TD',
	currency: 'CAD',
	startBalance: 0,
	type: 'checking'
}
// console.dir(newAccount)
// modelStore.createAccount(newAccount)


appStateStore.update()

console.log("SO FAR SO GOOD 4")