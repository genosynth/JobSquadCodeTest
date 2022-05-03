import React from 'react'

function MenuBar() {
  return (
    <div className='menu-bar'>
        <ul className='menu-list'>
            <li><a href='/q1'>Exact Search</a></li>
            <li><a href="/q2"> Array Search</a></li>
            <li><a href="/q3">Filter Search</a></li>
            <li><a href="/q4">Slot Machine</a></li>
            <li><a href="/q5">Register</a></li>
            <li><a href="/q6">Log In</a></li>

        </ul>
    </div>
  )
}

export default MenuBar