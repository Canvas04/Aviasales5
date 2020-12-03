import { actionsForFilters } from '../../constants/constants'
import {
	filterOnLabel,
	filterOnPrice,
	filterOnSpeed,
	filterOnLength,
} from '../../secondaryFunc'

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
