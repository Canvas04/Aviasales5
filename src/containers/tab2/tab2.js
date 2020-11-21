import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import filters from '../../action/filters';
import TicketList from '../../components/tickets-list/tickets-list';
import {   FASTEST } from '../../constants';

export default function Tab2 () {
    const dispatch = useDispatch();
    const tickets = useSelector(store => store.loadTickets.tickets)
    useEffect(() => {
        dispatch(filters(FASTEST,tickets))

    })
return <>
<TicketList />
</>
}
