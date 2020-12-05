import { actionsForFilters } from '../../constants/constants'
const { FILTER } = actionsForFilters

const reqFilters = (nameFilter, payload, key) => ({
	type: FILTER,
	nameFilter,
	payload,
	key,
})
const filters = (nameFilter, payload) => {
	return (dispatch, store) => {
		dispatch(reqFilters(nameFilter, payload, store().defineTab.key))
	}
}
export default filters
