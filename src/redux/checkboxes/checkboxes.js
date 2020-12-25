import { actionForCheckboxes } from '../../constants/constants'

const { PRESS_CHECK } = actionForCheckboxes

const initialState = {
  items: [
    {
      id: 1,
      label: 'Все',
      checked: true,
    },
    {
      id: 2,
      label: 'Без пересадок',
      checked: true,
    },
    {
      id: 3,
      label: '1 пересадка',
      checked: true,
    },
    {
      id: 4,
      label: '2 пересадки',
      checked: true,
    },
    {
      id: 5,
      label: '3 пересадки',
      checked: true,
    },
  ],
  selectAll: false,
}

const controlChecks = (arr, id, selectAll) => {
  if (id === 1) {
    const successArr = arr.map((el) => {
      return {
        ...el,
        checked: true,
      }
    })
    const failedArr = arr.map((el) => {
      return {
        ...el,
        checked: false,
      }
    })

    const isTrue = arr
      .filter((el) => el.id !== 1)
      .every((el) => el.checked === true)
    if (isTrue) {
      return { items: failedArr, selectAll: false }
    } else {
      return { items: successArr, selectAll: true }
    }
  }
  if (id > 1 && id < 6) {
    const changedArr = arr.map((el) => {
      if (el.id === id) {
        return { ...el, checked: !el.checked }
      }
      return { ...el }
    })
    const isTrue = changedArr
      .filter((el) => el.id !== 1)
      .every((el) => {
        return el.checked === true
      })
    if (isTrue) {
      const resArr = changedArr.map((el) => {
        if (el.id === 1) {
          return { ...el, checked: true }
        }
        return { ...el }
      })
      return { items: resArr, selectAll: isTrue }
    } else {
      const resArr = changedArr.map((el) => {
        if (el.id === 1) {
          return { ...el, checked: false }
        }
        return { ...el }
      })

      return { items: resArr, selectAll: isTrue }
    }
  }
}

export default function check(state = initialState, action) {
  switch (action.type) {
    case PRESS_CHECK:
      return controlChecks(state.items, action.id, state.selectAll)
    default:
      return state
  }
}
