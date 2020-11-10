import React, { useEffect } from 'react'
import TabPanel from '../tab-panel/tab-panel'
import { Checkbox } from 'antd'
import {
	ALL,
	NO_STOPS,
	ONE_STOP,
	THREE_STOPS,
	TWO_STOPS,
} from '../../constants'
import filters from '../../action/filters'
import { useDispatch, useSelector } from 'react-redux'

export default function Filter() {
	const dispatch = useDispatch()
	const loadTickets = useSelector((store) => store.loadTickets.tickets)

	const checkboxes = [ALL, NO_STOPS, ONE_STOP, TWO_STOPS, THREE_STOPS].map(
		(el, i) => {
			return (
				<Checkbox key={i} onChange={() => dispatch(filters(el, loadTickets))}>
					{el}
				</Checkbox>
			)
		}
	)
	return (
		<>
			{checkboxes}
			<TabPanel />
		</>
	)
}
