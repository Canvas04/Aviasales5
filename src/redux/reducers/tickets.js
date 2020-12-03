import { actionsForLoading } from '../../constants/index'

const {
	FETCH_REQUEST_TICKETS,
	FETCH_RECEIVE_TICKETS,
	FETCH_FAILURE_TICKETS,
} = actionsForLoading

const initialState = {
	isFetching: false,
	isError: false,
	tickets: [],
}

const loadTickets = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_REQUEST_TICKETS:
			return { ...state, isFetching: true }
		case FETCH_RECEIVE_TICKETS:
			return { ...state, isFetching: false, tickets: action.payload }
		case FETCH_FAILURE_TICKETS:
			return { ...state, isError: true }
		default:
			return state
	}
}
export default loadTickets
