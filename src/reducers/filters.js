import { FILTER } from "../constants";
import { filterOnPrice, filterOnSpeed } from "../secondaryFunc";

const filters = (state = null, action) => {
  switch (action.type) {
      case FILTER:
return getTickets(action)

      default:
          return state;
  }
}
export default filters

const  getTickets = (nameFilter) => {

    switch(nameFilter.id) {
case 'fastest':
return filterOnSpeed(nameFilter.payload)
case 'cheap':
    return filterOnPrice(nameFilter.payload)
    default:
        return nameFilter.payload;
    }
}
