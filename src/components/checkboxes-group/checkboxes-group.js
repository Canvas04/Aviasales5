import React from 'react'
import './checkboxes-group.scss';

export default function CheckboxGroups () {

    return <>
    <li>
    <input type='checkbox' id='check1' />
    <label htmlFor='check1' className='item__label'>Все</label>
    </li>
    <li>
    <input type='checkbox' id='check2' />
    <label htmlFor='check2' className='item__label'>Без пересадок</label>
    </li>
    <li>
    <input type='checkbox' id='check3' />
    <label htmlFor='check3' className='item__label'>1 пересадка</label>
    </li>
    <li>
    <input type='checkbox' id='check4' />
    <label htmlFor='check4' className='item__label'>2 пересадка</label>
    </li>
    <li>
    <input type='checkbox' id='check5' />
    <label htmlFor='check5' className='item__label'>3 пересадка</label>
    </li>
    </>
}
