import React from 'react';
import {render} from 'react-dom';

import {appStateStore} from '/app/stores/state.js'
import {settingsStore} from '/app/stores/settings.js'


export class AccountListView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
				<table className="table-striped">
				  <thead>
				    <tr>
				      <th>Account Name</th>
				      <th>Type</th>
				      <th>Balance</th>
				      <th>Currency</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td><a href="#">Cash CAD</a></td>
				      <td>Cash</td>
				      <td>$127.12</td>
				      <td>CAD</td>
				    </tr>

				    <tr>
				      <td>TD Checking</td>
				      <td>Debit</td>
				      <td>$7471.75</td>
				      <td>CAD</td>
				    </tr>

				    <tr>
				      <td>TD MasterCard</td>
				      <td>Credit</td>
				      <td>-$21.43</td>
				      <td>CAD</td>
				    </tr>

				    <tr>
				      <td>TD Saving</td>
				      <td>Debit</td>
				      <td>$2115.02</td>
				      <td>CAD</td>
				    </tr>

				  </tbody>
				</table>

			
    )
  }
}