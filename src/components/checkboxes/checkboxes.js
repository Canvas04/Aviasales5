import React from 'react'
import { Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getCheckId, getCheckLabel, getCheck } from '../../secondaryFunc/index'
import { pressCheck } from '../../action/checkboxes'
import filters from '../../action/filters'

export default function Checkboxes() {
	const dispatch = useDispatch()
	const stateCheckboxes = useSelector((store) => store.checkboxes.items)
	const loadedTickets = useSelector((store) => store.loadTickets.tickets)
	const elements = stateCheckboxes.map((el) => {
		return (
			<Checkbox
				key={el.id}
				onChange={() =>{
                    dispatch(
						pressCheck(
							getCheckId(el.id, stateCheckboxes),
							getCheckLabel(el.id, stateCheckboxes)
						)
                    )
                    dispatch( filters(getCheckLabel(el.id, stateCheckboxes),loadedTickets))
                }


				}
				checked={getCheck(el.id, stateCheckboxes)}
			>
				{getCheckLabel(el.id, stateCheckboxes)}
			</Checkbox>
		)
	})
	return <>{elements}</>
}
