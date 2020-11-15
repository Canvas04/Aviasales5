import { ALL, NO_STOPS, ONE_STOP, THREE_STOPS, TWO_STOPS } from '../constants'

export const filterOnPrice = (arr) => {
	const copyArr = arr.slice()
	return copyArr.sort((a, b) => {
		return a.price - b.price
	})
}
export const filterOnSpeed = (arr) => {
	const copyArr = arr.slice()

	return copyArr.sort((a, b) => {
		return (
			a.segments.reduce((acc, current) => acc.duration + current.duration) -
			b.segments.reduce((acc, current) => acc.duration + current.duration)
		)
	})
}

export const filterOnLength = (arr, counter) => {
    let limit = 20

	if (arr.length > 20) {
		for (let i = 1; i < counter; i++) {
			limit+=limit
        }
        return arr.slice(0,limit)
	}else {
        return arr;
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
		return arr
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
export const getPrevTickets = (prevTickets) => {
	return prevTickets
}
