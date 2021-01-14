import React, { useState, useEffect } from 'react'

function MainContent(props) {
  return (
    <>
      <main role="main" >
        <div>{props.children}</div>
      </main>
    </>
  )
}

export default MainContent
