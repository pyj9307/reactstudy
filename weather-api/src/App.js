import NewsPage from './components/NewsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<NewsPage/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
