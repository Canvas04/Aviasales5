import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import filters from '../../../redux/filters/filtersAction'
import TicketList from '../tickets-list/tickets-list'
import { actionsForFilters } from '../../../constants/constants'
const { FASTEST } = actionsForFilters

export default function TabFastest() {
	const dispatch = useDispatch()
	const tickets = useSelector((store) => store.loadTickets.tickets)
	const filter = useSelector((store) => store.currentFilter)

	useEffect(() => {
		dispatch(filters(FASTEST, tickets, filter))
	})
	return (
		<>
			<TicketList />
		</>
	)
}
