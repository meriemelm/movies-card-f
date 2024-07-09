import './App.css';
import MoviesGrid from './store/MoviesList';
import styled from 'styled-components';
const StyledBackground = styled.div`
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  return (
      <StyledBackground>
        <MoviesGrid />
      </StyledBackground>
  );
}

export default App;
