import { actionsForFilters } from '../../../constants/constants'

const { DEPARTURE, ARRIVAL } = actionsForFilters

export const getDestination = (obj = null, condition) => {
	const { segments } = obj

	switch (condition) {
		case DEPARTURE:
			const departure = segments[0]
			const { origin: originDeparture } = departure
			const { destination: destinationDeparture } = departure
			return originDeparture + '-' + destinationDeparture
		case ARRIVAL:
			const arrival = segments[1]
			const { origin: originArrival } = arrival
			const { destination: destinationArrival } = arrival

			return originArrival + '-' + destinationArrival
		default:
			return obj
	}
}
export const getDate = (obj = null, condition) => {
	const { segments } = obj

	switch (condition) {
		case DEPARTURE:
			const departure = segments[0]
			const { duration: durationDeparture } = departure
			return durationDeparture
		case ARRIVAL:
			const arrival = segments[1]
			const { duration: durationArrival } = arrival
			return durationArrival
		default:
			return obj
	}
}

export const getTime = (obj = null, condition) => {
	const { segments } = obj

	switch (condition) {
		case DEPARTURE:
			const departure = segments[0]
			const { date: dateDeparture } = departure
			return dateDeparture
		case ARRIVAL:
			const arrival = segments[1]
			const { date: dateArrival } = arrival
			return dateArrival
		default:
			return obj
	}
}
export const convertDate = (dots) => {
	var timeString = new Date(dots).toTimeString().replace(/:[0-9]{2,2} .*/, '')
	return dots ? timeString : timeString.replace(/:/, ' ')
}
export const getStops = (obj = null, condition) => {
	const { segments } = obj

	switch (condition) {
		case DEPARTURE:
			const departure = segments[0]
			const { stops: stopsDeparture } = departure
			return stopsDeparture.length !== 0 ? stopsDeparture.join() : 'прямой'
		case ARRIVAL:
			const arrival = segments[1]
			const { stops: stopsArrival } = arrival
			return stopsArrival.length !== 0 ? stopsArrival.join() : 'прямой'
		default:
			return obj
	}
}
export const makeStrForStops = (counter) => {
	switch (counter) {
		case 0:
			return '0 ПЕРЕСАДОК'
		case 1:
			return '1 ПЕРЕСАДКА'
		case 2:
			return '2 ПЕРЕСАДКИ'
		case 3:
			return '3 ПЕРЕСАДКИ'
		case 4:
			return '2 ПЕРЕСАДКИ'
		default:
			return `${counter} ПЕРЕСАДОК`
	}
}
export const divideOnRanges = (num) => {
	const int = String(Math.trunc(num))
	if (int.length <= 3) return int
	let space = 0
	let number = ''

	for (let i = int.length - 1; i >= 0; i--) {
		if (space === 3) {
			number = ' ' + number
			space = 0
		}
		number = int.charAt(i) + number
		space++
	}
	return number + ' Р'
}

export const converterMinutesToHours = (mins) => {
	let hours = Math.trunc(mins / 60)
	let minutes = mins % 60
	// eslint-disable-next-line no-useless-concat
	return hours + 'ч   ' + '' + (minutes + 'м')
}
