import {
	ALL,
	DEPARTURE,
	NO_STOPS,
	ONE_STOP,
	THREE_STOPS,
	TWO_STOPS,
	ARRIVAL,
} from '../constants'

export const filterOnPrice = (arr) => {
	const copyArr = arr.slice()
	copyArr.sort((a, b) => {
		return a.price - b.price
	})
	return copyArr.map((el) => {
		const { segments } = el
		return {
			...el,
			stopsForDeparture: segments[0].stops.length,
			stopsForArrival: segments[1].stops.length,
		}
	})
}
export const filterOnSpeed = (arr) => {
	const copyArr = arr.slice()

	copyArr.sort((a, b) => {
		return (
			a.segments.reduce((acc, current) => acc.duration + current.duration) -
			b.segments.reduce((acc, current) => acc.duration + current.duration)
		)
	})
	return copyArr.map((el) => {
		const { segments } = el
		return {
			...el,
			stopsForDeparture: segments[0].stops.length,
			stopsForArrival: segments[1].stops.length,
		}
	})
}

export const filterOnLength = (arr, counter) => {
	let limit = 7

	if (arr.length > limit) {
		for (let i = 1; i < counter; i++) {
			limit += limit
		}
		return arr.slice(0, limit)
	} else {
		return arr
	}
}

export const filterOnStops = (arr, num) => {
	const arrWithStops = arr.map((el) => {
		const { segments } = el
		return {
			...el,
			stops: segments.reduce(
				(acc, current) => acc.stops.length + current.stops.length
			),
			stopsForDeparture: segments[0].stops.length,
			stopsForArrival: segments[1].stops.length,
		}
	})

	if (num >= 0) {
		// eslint-disable-next-line array-callback-return
		const needTickets = arrWithStops.filter((el) => {
			if (el.stops === num) {
				return el
			}
		})
		if (needTickets.length === 0) {
			return 'Подходящих билетов нет'
		} else {
			return needTickets
		}
	} else {
		return arrWithStops
	}
}

export const filterOnLabel = (arr, label) => {
	switch (label) {
		case ALL:
			return filterOnStops(arr)
		case NO_STOPS:
			return filterOnStops(arr, 0)
		case ONE_STOP:
			return filterOnStops(arr, 1)
		case TWO_STOPS:
			return filterOnStops(arr, 2)

		case THREE_STOPS:
			return filterOnStops(arr, 3)

		default:
			return arr
	}
}
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

const getCheck = (id, arr) => {
	return arr.filter((el) => el.id === id).map((el) => el.checked)[0]
}
const getCheckLabel = (id, arr) => {
	return arr
		.filter((el) => el.id === id)
		.map((el) => el.label)
		.join(' ')
}
const getCheckId = (id, arr) => {
	return arr.filter((el) => el.id === id).map((el) => el.id)[0]
}

export { getCheck, getCheckLabel, getCheckId }

export const converterMinutesToHours = (mins) => {
	let hours = Math.trunc(mins / 60)
	let minutes = mins % 60
	return hours + 'ч   ' + '' + (minutes + 'м')
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

export const changeCheckboxes = (obj, id) => {
	const allSelected = obj.items.map((el) => {
		return {
			...el,
			checked: !el.checked,
		}
	})

	const oneSelected = obj.items.map((el) => {



		if (el.id === id) {

			return {
				...el,
				checked: !el.checked,
			}
        }
        
if(el.id > 1 && el.id < 6 && el.checked === true) {

        }

		return { ...el }
	})
	if (id === 1) {
		return { items: allSelected, selectAll: true }
	}
	if (id > 1 || id < 6) {
		return { items: oneSelected, selectAll: false }
	}
}
