// export const defineFilter = (filter) => ({ type: 'CURRENT', filter })

const current = (filter) => ({ type: 'CURRENT', filter })

export const defineFilter = () => {
	return (dispatch, store) => {
        console.log(store())
		dispatch(current(...store().currentFilter))
	}
}
