import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import {loadTickets} from '../action/loadTickets'

const App = () => {
const dispatch = useDispatch();
useEffect(() => {
    dispatch(loadTickets())
},[dispatch])
   return <>
   <ErrorBoundary >

   </ErrorBoundary>
</>

}

export default App;
