import { FILTER } from '../constants'

// const filters = (nameFilter, payload, id, label) => ({
// 	type: FILTER,
// 	nameFilter,
// 	payload,
// 	id,
// 	label,
// })
// export default filters

const reqFilters = (nameFilter,payload,counter) => ({type: FILTER,nameFilter,payload,counter})
const filters = (nameFilter,payload) => {
return (dispatch,store) => {
dispatch(reqFilters(nameFilter,payload,store().counter))
   }
}
export default filters
