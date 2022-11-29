import React from 'react'
import Cover from "../../../../img-content/cover-green.png"
import Userpic from "../../../../img-content/photos/photo6.png"
import Bell from "../../../../img-content/svg/bell.svg"

function ContentFirstRow() {
    return (
        <div className='content-first-row'>
            <section className="first-row-cover">
                <figure>
                    <img src={Cover} alt=''></img>
                </figure>
            </section>
            <section className="first-row-user">
                <figure className="first-row-userpic">
                    <img src={Userpic} alt='userpic'></img>
                    <figcaption>
                        <p>Margaret Phelps</p>
                        <p>245K subscribed</p>
                    </figcaption>
                </figure>
                <section className="first-row-subs">
                    <img src={Bell} className="first-row-icon" alt='bell-icon'></img>
                    <button  className="first-row-button">Subscribe 2.3m</button>
                </section>
            </section>
        </div>
    )
}

export default ContentFirstRow