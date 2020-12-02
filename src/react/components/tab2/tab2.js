import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import filters from '../../../redux/action/filters'
import TicketList from '../tickets-list/tickets-list'
import { actionsForFilters } from '../../../constants/index'
const { FASTEST } = actionsForFilters

export default function Tab2() {
	const dispatch = useDispatch()
	const tickets = useSelector((store) => store.loadTickets.tickets)
	useEffect(() => {
		dispatch(filters(FASTEST, tickets))
	})
	return (
		<>
			<TicketList />
		</>
	)
}
