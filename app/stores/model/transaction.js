let moment = require('moment')
import {AuditLogger} from './auditLogger.js'

export class TransactionModel extends AuditLogger {

  constructor(props) {
    super(props)		
  }

	createTransactionDataRecord(props) {
		let transaction = {}

		transaction.id = props.transactionId ? props.transactionId : this.generateId()
		transaction.date = props.transactionDate
		transaction.amount = props.transactionAmount
		transaction.accountId = props.accountId
		transaction.type = props.transactionType
		transaction.status = props.transactionStatus


		transaction.category = props.transactionCategory
		transaction.subcategory = props.transactionSubcategory
		transaction.notes = props.transactionNotes

		transaction.updated = moment().toJSON()
		return transaction
	}

	generateId() {
		let id = ""
		id = "transaction-id-" + moment().valueOf()
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

