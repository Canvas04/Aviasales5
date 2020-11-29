import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import filters from '../../action/filters'
import TicketList from '../../components/tickets-list/tickets-list'
import { actionsForFilters } from '../../constants'
const { CHEAPEST } = actionsForFilters

export default function Tab1() {
	const dispatch = useDispatch()
	const tickets = useSelector((store) => store.loadTickets.tickets)

	useEffect(() => {
		dispatch(filters(CHEAPEST, tickets))
	})
	return (
		<>
			<TicketList />
		</>
	)
}
