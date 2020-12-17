import { actionsForFilters } from '../../constants/constants'
import { filterOnLength, filterOnPrice, filterOnSpeed } from './extraFunc'
const { CHEAPEST, FASTEST, FILTER } = actionsForFilters

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
			return filterOnSpeed(filter.payload, filter.currentFilter,filter.filters)
		case CHEAPEST:
			return filterOnPrice(filter.payload, filter.currentFilter,filter.filters)

		default:
			if (filter.key === 1) {
				return filterOnPrice(filter.payload)
			} else {
				return filterOnSpeed(filter.payload)
			}
	}
}
