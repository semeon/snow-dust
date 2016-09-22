let moment = require('moment')
import {AuditLogger} from './auditLogger.js'

export class AccountModel extends AuditLogger {

  constructor(props) {
    super(props)		
  }

	createAccountDataRecord(props) {
		let account = {
				id: this.generateId(),
				name: props.accountName,
				type: props.accountType,
				group: props.accountGroup,
				startBalance: props.accountStartBalance,
				currency: props.accountCurrency,
				balance: 0
		}
		
		return account
	}

	generateId() {
		let id = ""
		id = "account-id-" + moment().valueOf()
		return id
	}

	update() {
		this.audit()
	}
}

