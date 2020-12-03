import { actionForCheckboxes } from '../../constants/constants'

const { PRESS_CHECK } = actionForCheckboxes
const pressCheck = (id) => ({ type: PRESS_CHECK, id })

export { pressCheck }
