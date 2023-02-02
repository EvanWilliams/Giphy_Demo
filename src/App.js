import logo from './logo.svg';
import GiphyBanner from './components/giphyBanner/giphyBanner'
import SearchBox from './components/searchBox/searchBox';
import './App.css';

import Baseview from './views/baseview/baseview';

function App() {
  return (
    <div className="App">
      <GiphyBanner/>
      <Baseview />
      <SearchBox/>
    </div>
  );
}

export default App;
