import { actionsForFilters } from '../../constants/constants'

const {
  FASTEST,
  CHEAPEST,
  ALL,
  NO_STOPS,
  THREE_STOPS,
  TWO_STOPS,
  ONE_STOP,
} = actionsForFilters
const filterOnStops = (arr, num) => {
  const arrWithStops = arr.map((el) => {
    const { segments } = el
    return {
      ...el,
      stops: segments.reduce(
        (acc, current) => acc.stops.length + current.stops.length
      ),
      stopsForDeparture: segments[0].stops.length,
      stopsForArrival: segments[1].stops.length,
    }
  })

  if (num >= 0) {
    // eslint-disable-next-line array-callback-return
    const needTickets = arrWithStops.filter((el) => {
      if (el.stops === num) {
        return el
      }
    })
    if (needTickets.length === 0) {
      return []
    } else {
      return needTickets
    }
  } else {
    return arrWithStops
  }
}

const filterOnPrice = (arr, filters) => {
  const copyArr = arr.slice()
  copyArr.sort((a, b) => {
    return a.price - b.price
  })
  const sortArr = copyArr.map((el) => {
    const { segments } = el
    return {
      ...el,
      stopsForDeparture: segments[0].stops.length,
      stopsForArrival: segments[1].stops.length,
    }
  })
  if (filters.length !== 0) {
    let resArr = []
    const numFilters =  getNumbersFromString(filters) 

    numFilters.forEach((el) => {
      resArr.unshift(...filterOnStops(sortArr, el))
    })
    return resArr
  } else {
    return []
  }
}

const filterOnSpeed = (arr, filters) => {
  const copyArr = arr.slice()

  copyArr.sort((a, b) => {
    return (
      a.segments.reduce((acc, current) => acc.duration + current.duration) -
      b.segments.reduce((acc, current) => acc.duration + current.duration)
    )
  })

  const sortArr = copyArr.map((el) => {
    const { segments } = el
    return {
      ...el,
      stopsForDeparture: segments[0].stops.length,
      stopsForArrival: segments[1].stops.length,
    }
  })
  if (filters.length !== 0) {
    let resArr = []

    const numFilters = getNumbersFromString(filters) 

    numFilters.forEach((el) => {
      resArr.unshift(...filterOnStops(sortArr, el))
    })
    return resArr
  } else {
    return []
  }
}

const filterOnLength = (arr = [], counter = 1) => {
  let limit = 7

  if (arr.length > limit) {
    for (let i = 1; i < counter; i++) {
      limit += limit
    }
    return arr.slice(0, limit)
  } else {
    return arr
  }
}

export default (state = null, action) => {
  switch (action.nameFilter) {
    case FASTEST:
      return filterOnLength(
        filterOnSpeed(action.payload, action.filters),
        action.counter
      )
    case CHEAPEST:
      return filterOnLength(
        filterOnPrice(action.payload, action.filters),
        action.counter
      )
    default:
      return state
  }
}

function getNumbersFromString(arr) {
  return arr.map((el) => {
    if (el === ALL) {
      return null
    }
    if (el === NO_STOPS) {
      return 0
    }
    if (el === ONE_STOP) {
      return 1
    }
    if (el === TWO_STOPS) {
      return 2
    }
    if (el === THREE_STOPS) {
      return 3
    }
  })
}
