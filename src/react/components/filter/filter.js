import React from 'react'
import TabPanel from '../tab-panel/tab-panel'
import CheckboxGroups from '../checkboxes-group/checkboxes-group'
import './filter.scss'

export default function Filter() {
	return (
		<>
			<div className="filter">
				<ul className="filter__checkboxes">
					<li className="filter__item">
						<h1 className="filter__header">КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
					</li>
					<CheckboxGroups />
				</ul>

				<div className="filter__tab-panel">
					<TabPanel />
				</div>
			</div>
		</>
	)
}
