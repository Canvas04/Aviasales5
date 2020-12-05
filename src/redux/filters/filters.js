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
			return filterOnSpeed(filter.payload)
		case CHEAPEST:
			return filterOnPrice(filter.payload)
		case ALL:
			if (filter.key === 1) {
				return filterOnPrice(filterOnLabel(filter.payload, filter.nameFilter))
			} else {
				return filterOnSpeed(filterOnLabel(filter.payload, filter.nameFilter))
			}
		case NO_STOPS:
			if (filter.key === 1) {
				return filterOnPrice(filterOnLabel(filter.payload, filter.nameFilter))
			} else {
				return filterOnSpeed(filterOnLabel(filter.payload, filter.nameFilter))
			}
		case ONE_STOP:
			if (filter.key === 1) {
				return filterOnPrice(filterOnLabel(filter.payload, filter.nameFilter))
			} else {
				return filterOnSpeed(filterOnLabel(filter.payload, filter.nameFilter))
			}
		case TWO_STOPS:
			if (filter.key === 1) {
				return filterOnPrice(filterOnLabel(filter.payload, filter.nameFilter))
			} else {
				return filterOnSpeed(filterOnLabel(filter.payload, filter.nameFilter))
			}
		case THREE_STOPS:
			if (filter.key === 1) {
				return filterOnPrice(filterOnLabel(filter.payload, filter.nameFilter))
			} else {
				return filterOnSpeed(filterOnLabel(filter.payload, filter.nameFilter))
			}

		default:
			if (filter.key === 1) {
				return filterOnPrice(filter.payload)
			} else {
				return filterOnSpeed(filter.payload)
			}
	}
}
