import { FILTER } from '../constants'

// const filters = (nameFilter, payload, id, label) => ({
// 	type: FILTER,
// 	nameFilter,
// 	payload,
// 	id,
// 	label,
// })
// export default filters

const reqFilters = (nameFilter, payload, id, label,prevLoadTickets) => ({
    	type: FILTER,
    	nameFilter,
    	payload,
    	id,
        label,
        prevLoadTickets
    })
const filters = (nameFilter,payload,id,label) => {

    return (dispatch,store) => {
        dispatch(reqFilters(nameFilter,payload,id,label,store().loadTickets.tickets))
    }
}
export default filters
