import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/Home'
import AllPodcast from './view/AllPodcast';

function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/all_podcast" element={<AllPodcast/>}></Route>
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
