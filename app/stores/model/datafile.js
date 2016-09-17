import {AuditLogger} from './auditLogger.js'
import {Account} from './account.js'

export class Datafile extends AuditLogger {

  constructor(props) {
    super(props)
		
		this.accounts = {}
		this.transactions = {}
		this.categories = {}
		this.subcategories = {}
		this.payees = {}
  }

	createAccount(props) {
		let account = new Account(props)
		this.audit()
	}


}

