import { FILTER, PRESS_CHECK } from '../constants'
import { changeCheckboxes } from '../secondaryFunc'

const initialState = {
	items: [
		{
			id: 1,
			label: 'Все',
			checked: false,
		},
		{
			id: 2,
			label: 'Без пересадок',
			checked: false,
		},
		{
			id: 3,
			label: '1 пересадка',
			checked: false,
		},
		{
			id: 4,
			label: '2 пересадки',
			checked: false,
		},
		{
			id: 5,
			label: '3 пересадки',
			checked: false,
		},
	],
	selectAll: false,
}

const checkboxes = (state = initialState, action) => {
	switch (action.type) {
		case PRESS_CHECK:
return getCheck(action)
		default:
			return state
	}
}

const getCheck = (action) => {
	switch (action.id) {
		case 1: return changeCheckboxes(action.payload,1)
		case 2: return changeCheckboxes(action.payload,2)
		case 3: return changeCheckboxes(action.payload,3)
		case 4:return changeCheckboxes(action.payload,4)
		case 5:return changeCheckboxes(action.payload,5)
		default:
			return action.payload
	}
}
export default checkboxes
