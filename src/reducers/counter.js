import { COUNTER } from '../constants'

export const counter = (state = 1, action) => {
	switch (action.type) {
		case COUNTER:
			return state + 1
		default:
			return state
	}
}
