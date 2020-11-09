import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { loadTickets } from '../action/loadTickets'
import Main from '../components/Main/Main'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadTickets())
	}, [dispatch])
	return (
		<>
			<ErrorBoundary>
				<Main />
			</ErrorBoundary>
		</>
	)
}

export default App
