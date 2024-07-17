
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from '../src/store/Movies';
describe('MovieCard component', () => {
  const movie = {
    title: 'Sample Movie',
    description: 'This is a sample movie description.',
    type: 'Action',
    releaseYear: 2023,
    image: 'sample_image.jpg',
  };

  it('renders movie details correctly', () => {
    const { getByAltText, getByText } = render(<MovieCard movie={movie} />);

    expect(getByAltText(movie.title)).toBeInTheDocument();
    expect(getByText(movie.title)).toBeInTheDocument();
    expect(getByText(movie.description)).toBeInTheDocument();
    //expect(getByText(`${movie.type}, ${movie.releaseYear}`)).toBeInTheDocument();
  });
});
