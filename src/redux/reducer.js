import { combineReducers } from 'redux'
import loadTickets from './tickets/tickets'
import filters from './filters/filters'
import check from './checkboxes/checkboxes'

export default combineReducers({ loadTickets, filters, check })
