import React from 'react'

import Photo1 from "../../../../img-content/photos/photo1.png"
import Photo2 from "../../../../img-content/photos/photo6.png"
import Photo3 from "../../../../img-content/photos/photo5.png"
import Photo4 from "../../../../img-content/photos/photo4.png"
import Photo5 from "../../../../img-content/photos/photo3.png"
import Photo6 from "../../../../img-content/photos/photo2.png"

function Subscriptions() {
  return (
    <div className='sidebar-subs'>
      <h3>Subscriptions</h3>
      <section className='sidebar-subs-list'>
        <figure className='subs-list-item'>
          <img alt='photo1' src={Photo1}></img>
          <figcaption>Gussie Singleton</figcaption>
        </figure>
        <figure className='subs-list-item'>
          <img alt='photo2' src={Photo2}></img>
          <figcaption>Nora Francis</figcaption>
        </figure>
        <figure className='subs-list-item'>
          <img alt='photo3' src={Photo3}></img>
          <figcaption>Belle Briggs</figcaption>
        </figure>
        <figure className='subs-list-item'>
          <img alt='photo4' src={Photo4}></img>
          <figcaption>Eunice Cortez</figcaption>
        </figure>
        <figure className='subs-list-item'>
          <img alt='photo5' src={Photo5}></img>
          <figcaption>Emma Hanson</figcaption>
        </figure>
        <figure className='subs-list-item' >
          <img alt='photo6' src={Photo6}></img>
          <figcaption>Leah Berry</figcaption>
        </figure>
      </section>
    </div>
  )
}

export default Subscriptions