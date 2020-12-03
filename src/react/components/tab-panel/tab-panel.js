import React from 'react'
import { Tabs } from 'antd'
import Tab1 from '../tab1/tab1'
import Tab2 from '../tab2/tab2'
import './tab-panel.scss'
import { useDispatch, useSelector } from 'react-redux'
import filters from '../../../redux/filters/filtersAction'
import { actionsForFilters } from '../../../constants/constants'
import { defineActiveTab } from '../../../secondaryFunc'
const { CHEAPEST, FASTEST } = actionsForFilters
const { TabPane } = Tabs

export default function TabPanel() {
	const dispatch = useDispatch()
	const tickets = useSelector((store) => store.loadTickets.tickets)

	const handlerOnTabClick = (key) => {
		defineActiveTab(key)
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
					<Tab1 />
				</TabPane>
				<TabPane tab="CАМЫЙ БЫСТРЫЙ" key="2">
					<Tab2 />
				</TabPane>
			</Tabs>
		</>
	)
}
