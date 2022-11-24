
import React from 'react'

import Icon1 from "../../../../img-content/svg/icon1.svg"
import Icon2 from "../../../../img-content/svg/icon2.svg"
import Icon3 from "../../../../img-content/svg/icon3.svg"
import Icon4 from "../../../../img-content/svg/icon4.svg"
import Icon5 from "../../../../img-content/svg/icon5.svg"
import Icon6 from "../../../../img-content/svg/icon6.svg"
import Icon7 from "../../../../img-content/svg/icon7.svg"
import Icon8 from "../../../../img-content/svg/icon8.svg"
import Icon9 from "../../../../img-content/svg/icon9.svg"
import Icon10 from "../../../../img-content/svg/icon10.svg"
import Icon11 from "../../../../img-content/svg/icon11.svg"

function Menu() {
    return (
        <div className='sidebar-menu'>
            <section className='sidebar-menu-list'>
                <figure className='sidebar-menu-item'>
                    <img alt='icon1' src={Icon1}></img>
                    <figcaption>Home</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon2' src={Icon2}></img>
                    <figcaption>Trending</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon3' src={Icon3}></img>
                    <figcaption>Subscriptions</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon4' src={Icon4}></img>
                    <figcaption>Library</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon5' src={Icon5}></img>
                    <figcaption>History</figcaption>
                </figure>
                <figure className='sidebar-menu-item' >
                    <img alt='icon6' src={Icon6}></img>
                    <figcaption>Watch later</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon7' src={Icon7}></img>
                    <figcaption>Favourites</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon8' src={Icon8}></img>
                    <figcaption>Liked videos</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon9' src={Icon9}></img>
                    <figcaption>Music</figcaption>
                </figure>
                <figure className='sidebar-menu-item'>
                    <img alt='icon10' src={Icon10}></img>
                    <figcaption>Games</figcaption>
                </figure>
                <figure className='sidebar-menu-item' >
                    <img alt='icon11' src={Icon11}></img>
                    <figcaption>Show more</figcaption>
                </figure>
            </section>
        </div>
    )
}

export default Menu