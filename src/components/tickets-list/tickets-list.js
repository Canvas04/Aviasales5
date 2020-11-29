import React from 'react'
import TicketListItem from '../tickets-list-item/tickets-list-item.js'
import './tickets-list.scss'

export default function TicketList() {
	return (
		<>
			<ul className="tickets">
				<TicketListItem />
			</ul>
		</>
	)
}
