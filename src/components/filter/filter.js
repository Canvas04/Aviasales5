import React from 'react'
import { Button } from 'antd'
import TabPanel from '../tab-panel/tab-panel'
import { useDispatch } from 'react-redux'
import { loadTickets } from '../../action/loadTickets'
import { counter } from '../../action/counter'
import Checkboxes, { GroupCheck } from '../checkboxes/checkboxes'
import './filter.scss'
import { divideOnRanges } from '../../secondaryFunc'

export default function Filter() {
	const dispatch = useDispatch()

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
