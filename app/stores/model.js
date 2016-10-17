let appRoot = require('app-root-path')
let jsonfile = require('jsonfile')
jsonfile.spaces = 2

import {Store} from './class/storeClass.js'

import {appStateStore} from './state.js'
import {settingsStore} from './settings.js'

// import {Datafile} from './model/datafile.js'
import {AccountModel} from './model/account.js'
import {TransactionModel} from './model/transaction.js'


class ModelStore extends Store {

  constructor(props) {
    super(props)
		this.accountModel = new AccountModel()
		this.transactionModel = new TransactionModel()
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



	// ACCOUNTS
	createAccountObjectById(props) {
		return this.accountModel.createAccountObjectById(props)
	}

	getAccount(accountId) {
		return this.data.accounts[accountId]
	}

	getAccounts() {
		return this.data.accounts
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
		delete this.data.accounts[props.id]
		this.saveDataToFile()
		this.applyChange()
	}



	// TRANSACTIONS
	createTransactionObjectById(selectedAccountId, selectedTransactionId) {
		return this.transactionModel.createTransactionObjectById(selectedAccountId, selectedTransactionId)
	}
	
	getTransaction(transactionId) {
		return this.data.transactions[transactionId]
	}

	getTransactions(accountId) {
		let result = {}
		
		for (let i in this.data.transactions) {
			let transaction = this.data.transactions[i]
			if (transaction.accountId == accountId) {
				result[i] = transaction
			}
		}
		
		return result
	}

	saveTransaction(props) {
		let transaction = this.transactionModel.createTransactionDataRecord(props)
		let id = transaction.id
		this.data.transactions[id] = transaction
		this.saveDataToFile()
		this.applyChange()
		return transaction.id
	}
	


	// DATAFILE
	saveDataToFile() {
		let datafilePath = settingsStore.getSettings().datafile
		if (datafilePath && this.data) {
			jsonfile.writeFileSync(datafilePath, this.data)
		}
	}


}

export let modelStore = new ModelStore({name:'Model'})