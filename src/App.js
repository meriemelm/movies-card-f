import React from 'react';
import MoviesGrid from './store/MoviesList';
import styled from 'styled-components';
const StyledBackground = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  color: #000;
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
