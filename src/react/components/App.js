import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import { loadTickets } from '../../redux/tickets/ticketsAction'
import Main from './Main/Main'

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
