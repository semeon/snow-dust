import {AuditLogger} from './auditLogger.js'

export class Account extends AuditLogger {

  constructor(props) {
    super(props)		

		this.id = props.id
		this.name = props.name
		this.currency = props.currency
		this.currencyIcon
		this.startBalance = props.startBalance
		this.type = props.type
		this.balance = 0
  }


	update() {
		this.audit()
	}
}

