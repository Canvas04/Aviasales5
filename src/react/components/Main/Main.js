import React from 'react'
import Filter from '../filter/filter'
import './Main.scss'
import logo from './Logo.svg'

export default function Main() {
  return (
    <>
      <div className="logo-block">
        <img src={logo} alt="logo" width={60} height={60} />
      </div>
      <Filter />
    </>
  )
}
