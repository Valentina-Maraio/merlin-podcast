import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/Home'
import AllPodcast from './view/AllPodcast';
import PodcastDetailPage from './view/PodcastDetailPage'
import PodcastDetailsCard from './component/PodcastDetailsCard';

function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/all_podcast" element={<AllPodcast/>}></Route>
          <Route path="/podcast_datail" element={<PodcastDetailPage/>}></Route>
          <Route path="/podcast_datails_card/:podcastId" element={<PodcastDetailsCard/>}></Route>
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
