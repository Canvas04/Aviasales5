import {
	FETCH_REQUEST_TICKETS,
	FETCH_RECEIVE_TICKETS,
	FETCH_FAILURE_TICKETS,
	TICKETS_URL,
	SEARCH_URL,
} from '../constants'

const requestTickets = () => {
	return {
		type: FETCH_REQUEST_TICKETS,
	}
}
const receiveTickets = (payload) => {
	return {
		type: FETCH_RECEIVE_TICKETS,
		status: 'success',
		payload,
	}
}
const errorLoadTickets = (error) => {
	return {
		type: FETCH_FAILURE_TICKETS,
		status: 'error',
		error,
	}
}

export function loadTickets() {
	return async (dispatch,store) => {
         const prevTickets = store().loadTickets.tickets

		const callId = await fetch(SEARCH_URL)
		const searchId = await callId.json()
		dispatch(requestTickets())

		try {
			const callTickets = await fetch(`${TICKETS_URL}=${searchId.searchId}`)

			const { tickets, stop } = await callTickets.json()
			const allTickets = tickets.concat(prevTickets)

			dispatch(receiveTickets(allTickets))
			if (tickets.length === 0) {
				throw new Error('Try to reload the page')
			}
		} catch (error) {
			dispatch(errorLoadTickets(error))
		}
	}
}
