import React from 'react'
import { Tabs } from 'antd'
import TabCheapest from '../tab-cheapest/tab-cheapest'
import TabFastest from '../tab-fastest/tab-fastest'
import './tab-panel.scss'
import { useDispatch, useSelector } from 'react-redux'
import filters from '../../../redux/filters/filtersAction'
import { actionsForFilters } from '../../../constants/constants'
import { getTab } from '../../../redux/defineActiveTab/activeTabAction'
const { CHEAPEST, FASTEST } = actionsForFilters
const { TabPane } = Tabs

export default function TabPanel() {
	const dispatch = useDispatch()
	const tickets = useSelector((store) => store.loadTickets.tickets)

	const handlerOnTabClick = (key) => {
		dispatch(getTab(key))
		if (key === '1') {
			dispatch(filters(CHEAPEST, tickets))
		}
		if (key === '2') {
			dispatch(filters(FASTEST, tickets))
		}
	}

	return (
		<>
			<Tabs
				defaultActiveKey="1"
				type="card"
				size={'large'}
				onTabClick={(key) => handlerOnTabClick(key)}
			>
				<TabPane tab="САМЫЙ ДЕШЕВЫЙ" key="1">
					<TabCheapest />
				</TabPane>
				<TabPane tab="CАМЫЙ БЫСТРЫЙ" key="2">
					<TabFastest />
				</TabPane>
			</Tabs>
		</>
	)
}
