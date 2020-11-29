import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pressCheck } from '../../action/checkboxes'
import './checkboxes-group.scss'
import { getCheckForHtml } from '../../secondaryFunc/index'
import filters from '../../action/filters'

export default function CheckboxGroups() {
	const dispatch = useDispatch()
	const checks = useSelector((store) => store.check.items)
	const loadedTickets = useSelector((store) => store.loadTickets.tickets)

	const elements = checks.map((el) => {
		return (
			<li key={el.id}>
				<input
					type="checkbox"
					id={el.id}
					checked={getCheckForHtml(el.id, checks)}
					onChange={() => {
						dispatch(pressCheck(el.id))
						dispatch(filters(el.label, loadedTickets))
					}}
				/>
				<label htmlFor={el.id} className="item__label">
					{el.label}
				</label>
			</li>
		)
	})

	return <>{elements}</>
}
