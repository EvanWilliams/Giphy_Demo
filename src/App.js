import logo from './logo.svg';
import GiphyBanner from './components/giphyBanner/giphyBanner'
import SearchBox from './components/searchBox/searchBox';
import RandomGif from './components/randomGif/randomGif';
import './App.css';

import Baseview from './views/baseview/baseview';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GiphyBanner/>
      <Baseview />
      <Routes>
        <Route path="/search-gif" element={<SearchBox/>}></Route>
        <Route path="/random-gif" element={<RandomGif/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
