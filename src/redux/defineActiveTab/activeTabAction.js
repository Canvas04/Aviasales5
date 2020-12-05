import { activeTab } from '../../constants/constants'

const { TAB } = activeTab
export const getTab = (key) => ({ type: TAB, key })
