let moment = require('moment')

export class AuditLogger {

  constructor(props) {
		this.updated = null
		this.audit()
  }

	audit() {
		this.updated = moment()
	}



}

