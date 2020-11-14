import React from 'react'
import { Button } from 'antd'
import { Checkbox } from 'antd'
import TabPanel from '../tab-panel/tab-panel'
import { useDispatch, useSelector } from 'react-redux'
import {
	ALL,
	NO_STOPS,
	ONE_STOP,
	THREE_STOPS,
	TWO_STOPS,
} from '../../constants'
import filters from '../../action/filters'
import { loadTickets } from '../../action/loadTickets'
import Loader from '../loader/loader'
import { getPrevTickets } from '../../secondaryFunc'

export default function Filter() {
	const dispatch = useDispatch()
	const loadedTickets = useSelector((store) => store.loadTickets.tickets)

	const checkboxes = [ALL, NO_STOPS, ONE_STOP, TWO_STOPS, THREE_STOPS].map(
		(el, i) => {
			return (
				<Checkbox key={i} onChange={() => dispatch(filters(el, loadedTickets))}>
					{el}
				</Checkbox>
			)
		}
	)
	return (
		<>
			{checkboxes}
			<TabPanel />
			<Button
				type="primary"
				className="btn btn-primary"
				onClick={() => {
					dispatch(loadTickets())
				}}
			>
				Показать еще
			</Button>
			<Loader />
		</>
	)
}
