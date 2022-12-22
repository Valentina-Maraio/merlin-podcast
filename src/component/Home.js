import '../App.css'
import React from 'react'
import AllPodcast from '../view/AllPodcast'
import SearchPodcast from './SearchPodcast'

const Home = () => {
  return (
    <div className='App-header'>
        <h4>Podcast</h4>
        <SearchPodcast/>
        <AllPodcast/>
    </div>
  )
}

export default Home