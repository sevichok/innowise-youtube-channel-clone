import React from 'react'
import "../../../styles/sidebar.css"
import SetIcon from "../../../img-content/svg/icon12.svg"
import Menu from "./Menu/Menu"
import Subscriptions from "./Subscriptions/Subscriptions"

function Sidebar() {
  return (
    <div className='sidebar'>
      <Menu />
      <Subscriptions />
      <section className='sidebar-settings'>
        <section className='sidebar-settings-logo'>
          <img src={SetIcon} alt='set-icon'></img>
        </section>
        <section className='sidebar-settings-text'>Settings</section>
      </section>
    </div>
  )
}

export default Sidebar