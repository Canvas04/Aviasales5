import { ALL, CHEAPEST, FASTEST, FILTER, NO_STOPS, THREE_STOPS, TWO_STOPS ,ONE_STOP} from '../constants'
import { filterOnLabel, filterOnLength, filterOnPrice, filterOnSpeed, getPrevTickets } from '../secondaryFunc'


const filters = (state = null, action) => {
	switch (action.type) {
		case FILTER:
			return filterOnLength(getTickets(action),getPrevTickets())

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
                return filterOnLabel(filter.payload,filter.nameFilter)
            case NO_STOPS:
                return filterOnLabel(filter.payload,filter.nameFilter)

            case ONE_STOP:
                return filterOnLabel(filter.payload,filter.nameFilter)
            case TWO_STOPS:
                return filterOnLabel(filter.payload,filter.nameFilter)
            case THREE_STOPS:
            return filterOnLabel(filter.payload,filter.nameFilter)

		default:
			return filter.payload
	}
}
