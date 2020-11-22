import React, { useState } from 'react'
import { Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getCheckId, getCheckLabel, getCheck } from '../../secondaryFunc/index'
import { pressCheck } from '../../action/checkboxes'
import filters from '../../action/filters'
import './checkboxes.scss'

export default function Checkboxes() {
	const dispatch = useDispatch()
	const stateCheckboxes = useSelector((store) => store.checkboxes.items)
	const loadedTickets = useSelector((store) => store.loadTickets.tickets)
	const storeCheckboxes = useSelector((store) => store.checkboxes)
	const elements = stateCheckboxes.map((el) => {
		return (
			<Checkbox
				key={el.id}
				onChange={() => {
					dispatch(
						pressCheck(
							getCheckId(el.id, stateCheckboxes),
							getCheckLabel(el.id, stateCheckboxes),
							storeCheckboxes
						)
					)
					dispatch(
						filters(getCheckLabel(el.id, stateCheckboxes), loadedTickets)
					)
				}}
				checked={getCheck(el.id, stateCheckboxes)}
			>
				{getCheckLabel(el.id, stateCheckboxes)}
			</Checkbox>
		)
	})
	return <>{elements}</>
}

const plainOptions = [
	'Без пересадок',
	'1 пересадка',
	'2 пересадки',
	'3 пересадки',
]
const defaultCheckedList = []
const CheckboxGroup = Checkbox.Group

export function GroupCheck() {
    const [checkedList,setCheckedList] = useState(defaultCheckedList)
    const [checkAll,setCheckAll] = useState(false)
    const onChange = list => {
        setCheckedList(list)
        setCheckAll(list.length === plainOptions.length)
    }
    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : [])
        setCheckAll(e.target.checked)
    }
	return <>
    <Checkbox onChange={onCheckAllChange} checked={checkAll} >
        Все
    </Checkbox>
    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
}
