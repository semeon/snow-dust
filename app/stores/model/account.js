let moment = require('moment')
import {AuditLogger} from './auditLogger.js'

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

	generateId() {
		let id = ""
		id = "account-id-" + moment().valueOf()
		return id
	}

	reconcileBalance() {
		return 0
	}

	update() {
		this.audit()
	}
}

