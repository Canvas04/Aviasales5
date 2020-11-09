import { CHEAPEST, FASTEST, FILTER } from '../constants'
import { filterOnPrice, filterOnSpeed } from '../secondaryFunc'

const filters = (state = null, action) => {
	switch (action.type) {
		case FILTER:
			return getTickets(action)

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
		default:
			return filter.payload
	}
}
