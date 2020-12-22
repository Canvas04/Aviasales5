import React from 'react'
import { useSelector } from 'react-redux'
import './ticketList.scss'
import logo from './S7 Logo.svg'
import {
	converterMinutesToHours,
	getDate,
	getDestination,
	getTime,
	convertDate,
	getStops,
	makeStrForStops,
	divideOnRanges,
} from './extraFunctions'
import { actionsForFilters } from '../../../constants/constants'
import Loader from '../loader/loader'

const { DEPARTURE, ARRIVAL } = actionsForFilters

export default function TicketListItem() {
	const tickets = useSelector((store) => store.filters)
	if (tickets) {
		const elements = tickets.map((item) => {
			return (
				<li className="tickets__item" key={item.price}>
					<div className="pricesAndLogo">
						<h3></h3>
						<img src={logo} alt={'S7 AirLines'} />
					</div>
					<div className="content">
						<span>
							<h4 className="minorHeader"></h4>
							<p className="content__el content__el_duration">
							
							</p>
						</span>
						<span>
							<h4 className="minorHeader">В ПУТИ</h4>
							<p className="content__el content__el_hours">
							
							</p>
						</span>
						<span>
							<h4 className="minorHeader">
							
							</h4>
							<p className="content__el content__el_stops">
							
							</p>
						</span>
					</div>
					<div className="content">
						<span>
							<h4 className="minorHeader"></h4>
							<p className="content__el content__el_hours">
								
							</p>
						</span>
						<span>
							<h4 className="minorHeader">В ПУТИ</h4>
							<p className="content__el content__el_duration">
								
							</p>
						</span>
						<span>
							<h4 className="minorHeader">
								
							</h4>
							<p className="content__el content__el_stops">
							
							</p>
						</span>
					</div>
				</li>
			)
		})
		return (
			<ul className="tickets">
				<Loader />
				{elements}
			</ul>
		)
	}

	return <> </>
}
