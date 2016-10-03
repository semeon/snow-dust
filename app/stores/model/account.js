let moment = require('moment')
import {AuditLogger} from './auditLogger.js'
import {modelStore} from '/app/stores/model.js'

export class AccountModel extends AuditLogger {

  constructor(props) {
    super(props)		
  }

	createAccountDataRecord(props) {
		let account = {}

		account.id = props.accountId ? props.accountId : this.generateId()
		account.name = props.accountName
		account.type = props.accountType
		account.group = props.accountGroup
		account.startBalance = props.accountStartBalance
		account.currency = props.accountCurrency
		account.balance = this.reconcileBalance()
		account.updated = moment().toJSON()
		return account
	}


	createAccountObjectById(selectedAccountId) {

		// Create blank
		let accountObj = {
			accountType: "Cash", //REFACTOR to take defaults from settings
			accountCurrency: "CAD",  //REFACTOR to take defaults from settings
			accountStartBalance : 0
		}

		// Or load existing		
		if (selectedAccountId && selectedAccountId.length > 0) {
			let acc = modelStore.getData().accounts[selectedAccountId]
			accountObj = {
				accountId: acc.id,
				accountName: acc.name,
				accountType: acc.type,
				accountGroup: acc.group,
				accountStartBalance: acc.startBalance,
				accountCurrency: acc.currency
			}
		}

		return accountObj
	}


	generateId() {
		let id = ""
		id = "account-id-" + moment().valueOf()
		// TODO: TEST FOR UNIQUENESS
		return id
	}

	reconcileBalance() {
		return 0
	}

	update() {
		this.audit()
	}
}

