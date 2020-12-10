import { actionsForFilters } from '../../constants/constants'
import {
	filterOnLabel,
	filterOnLength,
	filterOnPrice,
	filterOnSpeed,
} from './extraFunc'
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
			return filterOnLength(getTickets(action))

		default:
			return state
	}
}
export default filters

const getTickets = (filter) => {
	switch (filter.nameFilter) {
		case FASTEST:
			return filterOnSpeed(filter.payload, filter.currentFilter)
		case CHEAPEST:
			return filterOnPrice(filter.payload, filter.currentFilter)

		default:
			if (filter.key === 1) {
				return filterOnPrice(filter.payload)
			} else {
				return filterOnSpeed(filter.payload)
			}
	}
}
