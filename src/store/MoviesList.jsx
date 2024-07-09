import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MovieCard from './Movies';
import { fetchMovies } from './actions';
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FilterContainer = styled.div`
 display: flex;
  justify-content: center;
  margin: 20px 0;
  background-color: #e9ecef;

  input,
  select {
    margin: 0 10px;
    padding: 10px;
    font-size: 16px;
    font-family: Arial, sans-serif; 
    color: #555;
    border: 1px solid #ced4da;
    border-radius: 4px;
    background-color: #fff;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

const MoviesGrid = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = movies.filter(movie => {
    return movie.type.toLowerCase().includes(filterType.toLowerCase()) &&
           movie.releaseYear.toString().includes(searchTerm.toString())||
           movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <div>
      <FilterContainer>
        <input
          type="text"
          placeholder="Search by title or release year..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
        </select>
      </FilterContainer>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <GridContainer>
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </GridContainer>
    </div>
  );
};

export default MoviesGrid;
