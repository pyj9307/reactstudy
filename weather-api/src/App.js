import WeatherPage from './components/WeatherPage';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(20, 20, 20, 0.1) 10%,
    rgba(20, 20, 20, 0.7) 70%,
    rgba(20, 20, 20, 1)
  ), url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
      </Container>
  );
}

export default App;
