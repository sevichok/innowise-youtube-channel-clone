import React from 'react'
import "../../../styles/content.css"
import ContentThirdRow from './ContentThirdRow/ContentThirdRow'
import ContentSecondRow from './ContentSecondRow/ContentSecondRow'
import ContentFirstRow from "./ContentFirstRow/ContentFirstRow"

function Content() {
  return (
    <div className='content'>
      <ContentFirstRow />
      <ContentSecondRow />
      <ContentThirdRow />

    </div>
  )
}

export default Content