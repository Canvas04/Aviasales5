import { actionsForFilters } from '../../constants/constants'

const {
	ALL,
	CHEAPEST,
	FASTEST,
	FILTER,
	NO_STOPS,
	THREE_STOPS,
	TWO_STOPS,
	ONE_STOP,
} = actionsForFilters


 const filterOnPrice = (arr) => {
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
 const filterOnSpeed = (arr) => {
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

 const filterOnLength = (arr, counter) => {
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

 const filterOnStops = (arr, num) => {
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

const filterOnLabel = (arr, label) => {
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
const filters = (state = null, action) => {
	switch (action.type) {
		case FILTER:
			return filterOnLength(getTickets(action), action.counter)

		default:
			return state
	}
}
export default filters

const getTickets = (filter) => {
	switch (filter.nameFilter) {
		case FASTEST:
			return filterOnSpeed(filter.payload)
		case CHEAPEST:
			return filterOnPrice(filter.payload)
		case ALL:
			return filterOnLabel(filter.payload, filter.nameFilter)
		case NO_STOPS:
			return filterOnLabel(filter.payload, filter.nameFilter)

		case ONE_STOP:
			return filterOnLabel(filter.payload, filter.nameFilter)
		case TWO_STOPS:
			return filterOnLabel(filter.payload, filter.nameFilter)
		case THREE_STOPS:
			return filterOnLabel(filter.payload, filter.nameFilter)

		default:
			return filterOnPrice(filter.payload)
	}
}
