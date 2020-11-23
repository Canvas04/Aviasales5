import React from 'react'
import TabPanel from '../tab-panel/tab-panel'
import { useDispatch } from 'react-redux'
import  { GroupCheck } from '../checkboxes/checkboxes'
import './filter.scss'

export default function Filter() {

	return (
		<>
			<div className="filter">
				<div className="filter__checkboxes">
					<h1 className="filter__header">КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
					<GroupCheck />
				</div>
				<div className="filter__tab-panel">
					<TabPanel />
				</div>
			</div>
		</>
	)
}
