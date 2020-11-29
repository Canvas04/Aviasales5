import { actionForCheckboxes } from '../constants'

const { PRESS_CHECK } = actionForCheckboxes
const pressCheck = (id) => ({ type: PRESS_CHECK, id })

export { pressCheck }
