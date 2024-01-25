import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {Box} from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components";
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
      
      <ToastContainer />
    </Box>
  </BrowserRouter>
);

export default App;