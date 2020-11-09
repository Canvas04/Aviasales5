import { combineReducers } from "redux";
import loadTickets from './loadTickets'
import filters from './filters'

export default combineReducers({loadTickets,filters});
