import React from 'react'
import { Tabs } from 'antd'
import Tab1 from '../../containers/tab1/tab1'
import Tab2 from '../../containers/tab2/tab2'
import './tab-panel.scss'

const { TabPane } = Tabs

export default function TabPanel() {
	return (
		<>
			<Tabs defaultActiveKey="1" type="card" size={'large'}>
				<TabPane tab="Самый дешевый" key="1">
					<Tab1 />
				</TabPane>
				<TabPane tab="Caмый быстрый" key="2">
					<Tab2 />
				</TabPane>
			</Tabs>
		</>
	)
}
