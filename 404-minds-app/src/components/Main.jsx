import React from 'react'
import '../Styles/main.css'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

function Main() {
  return (
    <div className='mainComponent'>
        <LeftMenu/>
        <RightMenu/>
    </div>
  )
}

export default Main