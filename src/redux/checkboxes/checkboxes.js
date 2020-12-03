import { actionForCheckboxes } from '../../constants/constants'
import { controlChecks } from '../../secondaryFunc/index'
const { PRESS_CHECK } = actionForCheckboxes

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

export default function check(state = initialState, action) {
	switch (action.type) {
		case PRESS_CHECK:
			return controlChecks(state.items, action.id, state.selectAll)
		default:
			return state
	}
}
