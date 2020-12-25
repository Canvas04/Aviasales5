import { combineReducers } from 'redux'
import loadTickets from './tickets/tickets'
import filters from './filters/filters'
import check from './checkboxes/checkboxes'
import counter from './counter/counter'

export default combineReducers({
  loadTickets,
  filters,
  check,
  counter,
})
