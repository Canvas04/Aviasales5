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

export const filterOnLength = (arr) => {
	if (arr.length > 20) {
		return arr.slice(0, 20)
	}
	return arr
}

const filterOnStops = (arr, num) => {
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
		case 'Все':
			return filterOnStops(arr)

		case 'Без пересадок':
			return filterOnStops(arr, 0)

		case '1 пересадка':
			return filterOnStops(arr, 1)

		case '2 пересадки':
			return filterOnStops(arr, 2)

		case '3 пересадки':
			return filterOnStops(arr, 3)

		default:
			return arr
	}
}
