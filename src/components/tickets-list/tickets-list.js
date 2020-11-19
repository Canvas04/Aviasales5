import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counter } from '../../action/counter.js'
import { loadTickets } from '../../action/loadTickets.js'
import TicketListItem from '../tickets-list-item/tickets-list-item.js'
import './tickets-list.scss'

export default function TicketList() {
    const isLoading = useSelector(store => store.loadTickets.isFetching)
    const dispatch = useDispatch()
	return (
        <>
		<ul className="ul">
			<TicketListItem />
		</ul>
        { !isLoading && <button type="button" class="btn btn-primary btn-md btn-block" onClick={() => {
					dispatch(loadTickets())
					dispatch(counter())
				}}>Показать ещё</button>}
        </>
	)
}
