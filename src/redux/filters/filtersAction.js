import { actionsForFilters } from '../../constants/constants'
const { FILTER } = actionsForFilters

const filters = (nameFilter, payload, currentFilter, filters, counter) => ({
	type: FILTER,
	nameFilter,
	payload,
	currentFilter,
	filters,
	counter,
})

export default filters
