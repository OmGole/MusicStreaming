import React from 'react'
import '../components/Loading.css'

function Loading() {
  return (
    <>
    <h2>Connecting with MetaMask</h2>
    <div id="loading-bar-spinner" class="spinner">
      <div class="spinner-icon"></div>
    </div>
    </>

  )
}

export default Loading