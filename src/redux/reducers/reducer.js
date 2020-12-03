import { combineReducers } from 'redux'
import loadTickets from './tickets'
import filters from './filters'
import { counter } from './counter'
import check from './checkboxes'

export default combineReducers({ loadTickets, filters, counter, check })
