import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from 'src/components';
import { Home, Search, Show } from 'src/views';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
