let moment = require('moment')
import {AuditLogger} from './auditLogger.js'
import {modelStore} from '/app/stores/model.js'

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

	createTransactionObjectById(selectedAccountId, selectedTransactionId) {
		
		// Create blank
		let transaction = {
			accountId: selectedAccountId,
			transactionAmount: 0,
			transactionType: "Withdrawal", //REFACTOR to take defaults from settings
			transactionCategory: "",
			transactionSubcategory: "",
			transactionNotes : ""
		}

		// Or load existing
		if (selectedTransactionId && selectedTransactionId.length > 0) {
			let trns = modelStore.getTransaction(selectedTransactionId)
			transaction = {
				transactionId: trns.id,
				transactionDate: trns.date,
				transactionAmount: trns.amount,
				accountId: trns.accountId,
				transactionType: trns.type,
				transactionCategory: trns.category,
				transactionSubcategory: trns.subcategory,
				transactionNotes: trns.notes,
				
				transactionExists: true
			}
		}		
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

