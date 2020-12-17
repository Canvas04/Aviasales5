import { actionsForFilters } from '../../constants/constants'

const { ALL, NO_STOPS, THREE_STOPS, TWO_STOPS, ONE_STOP } = actionsForFilters

export const filterOnPrice = (arr, currentFilter, filters) => {
	const copyArr = arr.slice()
	copyArr.sort((a, b) => {
		return a.price - b.price
	})
	const sortArr = copyArr.map((el) => {
		const { segments } = el
		return {
			...el,
			stopsForDeparture: segments[0].stops.length,
			stopsForArrival: segments[1].stops.length,
		}
	})

	let Allstops
	let Nostops
	let OneStop
	let TwoStops
	let ThreeStops

	if (filters.length !== 0) {
		if (filters.includes(ALL)) {
			Allstops = filterOnStops(sortArr)
		} else {
			Allstops = []
		}

		if (filters.includes(NO_STOPS)) {
			Nostops = filterOnStops(sortArr, 0)
		} else {
			Nostops = []
		}
		if (filters.includes(ONE_STOP)) {
			OneStop = filterOnStops(sortArr, 1)
		} else {
			OneStop = []
		}
		if (filters.includes(TWO_STOPS)) {
			TwoStops = filterOnStops(sortArr, 2)
		} else {
			TwoStops = []
		}
		if (filters.includes(THREE_STOPS)) {
			ThreeStops = filterOnStops(sortArr, 3)
		} else {
			ThreeStops = []
		}
		let resArr = [
			...Allstops,
			...Nostops,
			...OneStop,
			...TwoStops,
			...ThreeStops,
		]
		return resArr
	} else {
		return sortArr
	}
}
export const filterOnSpeed = (arr, currentFilter, filters) => {
	const copyArr = arr.slice()

	copyArr.sort((a, b) => {
		return (
			a.segments.reduce((acc, current) => acc.duration + current.duration) -
			b.segments.reduce((acc, current) => acc.duration + current.duration)
		)
	})
	const sortArr = copyArr.map((el) => {
		const { segments } = el
		return {
			...el,
			stopsForDeparture: segments[0].stops.length,
			stopsForArrival: segments[1].stops.length,
		}
	})

	let Allstops
	let Nostops
	let OneStop
	let TwoStops
	let ThreeStops

	if (filters.length !== 0) {
		if (filters.includes(ALL)) {
			Allstops = filterOnStops(sortArr)
		} else {
			Allstops = []
		}

		if (filters.includes(NO_STOPS)) {
			Nostops = filterOnStops(sortArr, 0)
		} else {
			Nostops = []
		}
		if (filters.includes(ONE_STOP)) {
			OneStop = filterOnStops(sortArr, 1)
		} else {
			OneStop = []
		}
		if (filters.includes(TWO_STOPS)) {
			TwoStops = filterOnStops(sortArr, 2)
		} else {
			TwoStops = []
		}
		if (filters.includes(THREE_STOPS)) {
			ThreeStops = filterOnStops(sortArr, 3)
		} else {
			ThreeStops = []
		}
		let resArr = [
			...Allstops,
			...Nostops,
			...OneStop,
			...TwoStops,
			...ThreeStops,
		]
		return resArr
	} else {
		return sortArr
	}
}

export const filterOnLength = (arr, counter = 1) => {
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

export function filterOnLabel(arr, label) {
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
