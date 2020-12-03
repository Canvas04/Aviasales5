import { actionsForFilters } from '../../constants/constants'
const { FILTER } = actionsForFilters

const reqFilters = (nameFilter, payload, counter) => ({
	type: FILTER,
	nameFilter,
	payload,
	counter,
})
const filters = (nameFilter, payload) => {
	return (dispatch, store) => {
		dispatch(reqFilters(nameFilter, payload, store().counter))
	}
}
export default filters
