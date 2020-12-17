import { actionsForFilters } from '../../constants/constants'
const { FILTER } = actionsForFilters

const filters = (nameFilter, payload, currentFilter,filters) => ({
	type: FILTER,
	nameFilter,
	payload,
	currentFilter,
	filters
})

export default filters
