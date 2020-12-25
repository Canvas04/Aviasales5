import React from 'react'
import TabPanel from '../tab-panel/tab-panel'
import FilterOnStops from '../filter-on-stops/filteron-stops'
import './filter.scss'

export default function Filter() {
  return (
    <>
      <div className="filter">
        <ul className="filter__checkboxes">
          <li className="filter__item">
            <h1 className="filter__header">КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
          </li>
          <FilterOnStops />
        </ul>

        <div className="filter__tab-panel">
          <TabPanel />
        </div>
      </div>
    </>
  )
}
