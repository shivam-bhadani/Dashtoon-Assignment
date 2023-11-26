import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateComic from './pages/CreateComic';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-comic' element={<CreateComic />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
