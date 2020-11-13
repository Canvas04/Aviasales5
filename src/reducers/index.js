import { combineReducers } from "redux";
import loadTickets from './loadTickets'
import filters from './filters'
import checkboxes from './checkboxes';

export default combineReducers({loadTickets,filters,checkboxes});
