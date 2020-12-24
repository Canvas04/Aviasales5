import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import styled from 'styled-components'
import { Button } from 'antd'
import { counter } from '../../../redux/counter/counter-action'

const { DEPARTURE, ARRIVAL } = actionsForFilters

export default function TicketListItem() {
	const dispatch = useDispatch()
	const tickets = useSelector((store) => store.filters)
	const isCheckedFilters = useSelector((store) => store.check.items)
		.map((el) => el.checked)
		.every((el) => el === false)
	const noStops = useSelector((store) => store.check.items)
		.filter((el) => el.id == 2)
		.map((el) => el.checked).every(el => el === true)

		const otherStops = useSelector(store => store.check.items).filter(el => el.id !== 2).map(el => el.checked).every(el => el === false)
console.log(noStops,otherStops)


	if (tickets) {
		const elements = tickets.map((item) => {
			return (
				<li className="tickets__item" key={item.price}>
					<div className="pricesAndLogo">
						<h3>{divideOnRanges(item.price)}</h3>
						<img src={logo} alt={'S7 AirLines'} />
					</div>
					<div className="content">
						<span>
							<h4 className="minorHeader">{getDestination(item, DEPARTURE)}</h4>
							<p className="content__el content__el_duration">
								{convertDate(getTime(item, DEPARTURE))} -{' '}
								{convertDate(getTime(item, ARRIVAL))}{' '}
							</p>
						</span>
						<span>
							<h4 className="minorHeader">В ПУТИ</h4>
							<p className="content__el content__el_hours">
								{' '}
								{converterMinutesToHours(getDate(item, DEPARTURE))}{' '}
							</p>
						</span>
						<span>
							{noStops && otherStops ? (
								<h4 className="minorHeader position">БЕЗ ПЕРЕСАДОК</h4>
							) : (
								<>
									{' '}
									<h4 className="minorHeader">
										{makeStrForStops(item.stopsForDeparture)}
									</h4>
									<p className="content__el content__el_stops">
										{getStops(item, DEPARTURE)}
									</p>
								</>
							)}
						</span>
					</div>
					<div className="content">
						<span>
							<h4 className="minorHeader">{getDestination(item, ARRIVAL)}</h4>
							<p className="content__el content__el_hours">
								{convertDate(getTime(item, ARRIVAL))} -{' '}
								{convertDate(getTime(item, DEPARTURE))}
							</p>
						</span>
						<span>
							<h4 className="minorHeader">В ПУТИ</h4>
							<p className="content__el content__el_duration">
								{' '}
								{converterMinutesToHours(getDate(item, ARRIVAL))}{' '}
							</p>
						</span>
						<span>
							{noStops && otherStops ?   (
								<h4 className="minorHeader position">БЕЗ ПЕРЕСАДОК</h4>
							) : (
								<>
									{' '}
									<h4 className="minorHeader">
										{makeStrForStops(item.stopsForDeparture)}
									</h4>
									<p className="content__el content__el_stops">
										{getStops(item, DEPARTURE)}
									</p>
								</>
							)}
						</span>
					</div>
				</li>
			)
		})
		return (
			<>
				{!isCheckedFilters && (
					<>
						<ul className="tickets">
							<Loader />
							{elements}
						</ul>
						<button
							type="button"
							className="btn btn-primary btn-lg btn-block"
							onClick={() => dispatch(counter())}
						>
							{' '}
							Показать еще
						</button>
					</>
				)}
				{isCheckedFilters && (
					<Label>Рейсов, подходящих под заданные фильтры , не найдено</Label>
				)}
			</>
		)
	}

	return <></>
}

const Label = styled.div`
	text-align: center;
	margin-top: 10px;
	opacity: 0.3;
`
