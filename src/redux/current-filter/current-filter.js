const currentFilter = (state = ['Все'], action) => {
	switch (action.type) {
		case 'CURRENT':
			
			
			return [...action.filter]
		default:
			return state
	}
}
export default currentFilter
