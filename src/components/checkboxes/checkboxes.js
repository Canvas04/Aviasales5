import React, { useState } from 'react'
import { Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import filters from '../../action/filters'
import './checkboxes.scss'
import {
	NO_STOPS,
	ONE_STOP,
	TWO_STOPS,
	THREE_STOPS,
	ALL,
} from '../../constants/index'


const plainOptions = [NO_STOPS, ONE_STOP, TWO_STOPS, THREE_STOPS]
const defaultCheckedList = []
const CheckboxGroup = Checkbox.Group

export function GroupCheck() {
	const [checkedList, setCheckedList] = useState(defaultCheckedList)
	const [checkAll, setCheckAll] = useState(false)
	const dispatch = useDispatch()
	const loadedTickets = useSelector((store) => store.loadTickets.tickets)
	const onChange = (list) => {
		setCheckedList(list)
		setCheckAll(list.length === plainOptions.length)
        dispatch(filters(list[list.length -1], loadedTickets))
        console.log(list[list.length -1],list.length)
	}
	const onCheckAllChange = (e) => {
		setCheckedList(e.target.checked ? plainOptions : [])
        setCheckAll(e.target.checked)
        dispatch(filters(ALL,loadedTickets))
	}
	return (
		<>
			<Checkbox onChange={onCheckAllChange} checked={checkAll}>
				{ALL}
			</Checkbox>
			<CheckboxGroup
				options={plainOptions}
				value={checkedList}
				onChange={onChange}
			/>
		</>
	)
}
