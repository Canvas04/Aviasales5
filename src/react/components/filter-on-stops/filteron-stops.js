import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pressCheck } from '../../../redux/checkboxes/checkboxesAction'
import './checkboxes-group.scss'


const getCheckForHtml = (id, arr) => {
	return arr.filter((el) => el.id === id).map((el) => el.checked)[0]
}

export default function FilterOnStops() {
	const dispatch = useDispatch()
	const checks = useSelector((store) => store.check.items)
	const elements = checks.map((el) => {
		return (
			<li key={el.id}>
				<input
					type="checkbox"
					id={el.id}
					checked={getCheckForHtml(el.id, checks)}
					onChange={() => {
						dispatch(pressCheck(el.id))
						
					}}
				/>
				<label htmlFor={el.id} className="item__label">
					{el.label}
				</label>
			</li>
		)
	})

	return <>{elements}</>
}
