import { combineReducers } from "redux";
import loadTickets from './loadTickets'
import filters from './filters'
import checkboxes from './checkboxes';
import {counter} from './counter'

export default combineReducers({loadTickets,filters,checkboxes,counter});
