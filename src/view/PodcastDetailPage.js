import React from 'react'
import { useLocation } from 'react-router-dom'

const PodcastDetailPage = () => {
  const {state} = useLocation();
  console.log(state)

  return (
    <>
    <h4>PodcastDetailPage</h4>
    <h5>{state.id}</h5>
    </>
  )
}

export default PodcastDetailPage