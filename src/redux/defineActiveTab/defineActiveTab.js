import { activeTab } from '../../constants/constants'

const { TAB } = activeTab
const initialState = {
	key: 1,
}
const defineTab = (state = initialState, action) => {
	switch (action.type) {
		case TAB:
			return { key: action.key }
		default:
			return state
	}
}
export default defineTab
