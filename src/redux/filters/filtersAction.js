import { actionsForFilters } from '../../constants/constants'
const { FILTER } = actionsForFilters

const filters = (nameFilter, payload, currentFilter) => ({
	type: FILTER,
	nameFilter,
	payload,
	currentFilter,
})

export default filters
