import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MovieCard from './Movies';
import { fetchMovies } from './actions';

const GridContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  input {
    padding: 10px 20px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: #fff;
    outline: none;
    width: 500px; 
    max-width: 100%;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &::placeholder {
      color: #999;
    }
  }

  .search-icon {
    margin-left: -30px;
  }
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  button {
    padding: 8px 16px;
    font-size: 14px;
    font-family: Arial, sans-serif;
    color: #000;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: border-color 0.3s, color 0.3s;

    &:hover {
      color: #0074d9;
      border-color: #0074d9;
    }

    &.active {
      color: #0074d9;
      border-color: #0074d9;
    }
  }
`;

const PaginationContainer = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin-top: 20px;

  .page-item {
    margin: 0 5px;
  }

  .page-link {
    color: #0074d9;
    border: none;
    background-color: transparent;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(0, 116, 217, 0.1);
    }

    &.active {
      background-color: #0074d9;
      color: #fff;
    }
  }
`;
const MoviesGrid = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4); 

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = movies.filter(movie => {
    return movie.type.toLowerCase().includes(filterType.toLowerCase()) &&
           movie.releaseYear.toString().includes(searchTerm.toString())||
           movie.type.toLowerCase().includes(filterType.toLowerCase()) &&
           movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  });
  const indexOfLastMovie = currentPage * pageSize;
  const indexOfFirstMovie = indexOfLastMovie - pageSize;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <SearchContainer>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <img
          className="search-icon"
          src="https://th.bing.com/th?id=OIP.LwNGX9Hx0mIyG98BgbbpMwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="Search"
          width="20px"
          height="20px"
        />
      </SearchContainer>
      <CategoryList>
        <button className={filterType === '' ? 'active' : ''} onClick={() => setFilterType('')}>
          All
        </button>
        <button className={filterType === 'action' ? 'active' : ''} onClick={() => setFilterType('action')}>
          Action
        </button>
        <button className={filterType === 'drama' ? 'active' : ''} onClick={() => setFilterType('drama')}>
          Drama
        </button>
        <button className={filterType === 'comedy' ? 'active' : ''} onClick={() => setFilterType('comedy')}>
          Comedy
        </button>
      </CategoryList>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <GridContainer>
        {currentMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </GridContainer>
      {filteredMovies.length > pageSize && (
        <PaginationContainer>
          {Array.from({ length: Math.ceil(filteredMovies.length / pageSize) }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </PaginationContainer>
      )}
    </div>
  );
};

export default MoviesGrid;
