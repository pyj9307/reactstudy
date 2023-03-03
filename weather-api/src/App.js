import WeatherPage from './components/WeatherPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
