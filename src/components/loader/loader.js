import React from 'react'
import { useSelector } from 'react-redux'

export default  function Loader () {
    const isFetching = useSelector(store => store.loadTickets.isFetching);
    return <>
    {isFetching && <p>Loading...</p>}
    </>
}
