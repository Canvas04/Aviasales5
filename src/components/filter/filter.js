import React from 'react'
import TabPanel from '../tab-panel/tab-panel'
import  { GroupCheck } from '../checkboxes/checkboxes'
import './filter.scss'


export default function Filter() {

	return (
		<>
			<div className="filter">

                    <ul className="filter__checkboxes">
				<li className='filter__item'><h1 className="filter__header">КОЛИЧЕСТВО ПЕРЕСАДОК</h1></li>
					<GroupCheck />
				</ul>


				<div className="filter__tab-panel">
					<TabPanel />
				</div>
			</div>
		</>
	)
}
