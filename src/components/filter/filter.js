import React from 'react'
import { Button } from 'antd'
import TabPanel from '../tab-panel/tab-panel'
import { useDispatch} from 'react-redux'
import { loadTickets } from '../../action/loadTickets'
import Loader from '../loader/loader'
import { counter } from '../../action/counter'
import Checkboxes from '../checkboxes/checkboxes'

export default function Filter() {
	const dispatch = useDispatch()

	return (
		<>

            <Checkboxes />
			<TabPanel />
			<Button
				type="primary"
				className="btn btn-primary"
				onClick={() => {
					dispatch(loadTickets())
					dispatch(counter())
				}}
			>
				Показать еще
			</Button>
			<Loader />
		</>
	)
}
