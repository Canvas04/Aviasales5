import { combineReducers } from 'redux'
import loadTickets from './tickets/tickets'
import filters from './filters/filters'
import check from './checkboxes/checkboxes'
import defineTab from './defineActiveTab/defineActiveTab'
import currentFilter from './current-filter/current-filter'

export default combineReducers({ loadTickets, filters, check, defineTab ,currentFilter})
