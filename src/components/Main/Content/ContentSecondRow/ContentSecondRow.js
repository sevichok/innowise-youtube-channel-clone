import React from 'react'
import Search from "../../../../img-content/svg/search.svg"
import Cover from "../../../../img-content/cover-blue.png"
import Photo1 from "../../../../img-content/photos/photo8.png"
import Photo2 from "../../../../img-content/photos/photo9.png"
import Photo3 from "../../../../img-content/photos/photo10.png"
import HiddenIcon from "../../../../img-content/svg/rightArrow.svg"

function ContentSecondRow() {
  return (
    <div className='content-second-row'>
      <div className='second-row-left'>
        <section className='left-header-list'>
          <section className='header-list-item'>Home</section>
          <section className='header-list-item'>Videos</section>
          <section className='header-list-item'>Playlists</section>
          <section className='header-list-item'>Channels</section>
          <section className='header-list-item'>Discussion</section>
          <section className='header-list-item'>About</section>
          <section className='header-list-item'>
            <img src={Search} alt=''></img>
            <img src={HiddenIcon} alt='' className='hidden-icon'></img>
          </section>
        </section>
        <section className='left-content'>
          <figure className='left-content-figure'>
            <figure>
              <img src={Cover} alt=''></img>
              <figcaption className='content-center-timing'>7:36</figcaption>
            </figure>
            <figcaption>
              <h3>Choosing The Best Audio Player Software For Your Computer</h3>
              <p>Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
              <p>11k views&nbsp;&nbsp;·&nbsp;&nbsp;6 months ago</p>
            </figcaption>
          </figure>
        </section>
      </div>
      <div className='second-row-right'>
        <p>Recommended channel</p>
        <section className='right-row-list'>
          <figure className='right-row-item'>
            <img alt='photo1' src={Photo1}></img>
            <figcaption>Flora Benson</figcaption>
          </figure>
          <figure className='right-row-item'>
            <img alt='photo2' src={Photo2}></img>
            <figcaption>Violet Cobb</figcaption>
          </figure>
          <figure className='right-row-item'>
            <img alt='photo3' src={Photo3}></img>
            <figcaption>Phillip Mullins</figcaption>
          </figure>
        </section>
      </div>
    </div>
  )
}

export default ContentSecondRow