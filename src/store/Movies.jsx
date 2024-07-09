import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
 width: 200px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center; 
  background-image: url('chemin/vers/votre/image.jpg');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h3`
  margin: 0;
  padding: 8px 0;
 font-family: 'Lobster', cursive;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  font-family: 'Lobster', cursive;
`;

const Type = styled.span`
  display: block;
  font-size: 12px;
  color: #aaa;
  font-family: 'Lobster', cursive;
`;

const MovieCard = ({ movie }) => (
  <Card>
    <Image src={movie.image} alt={movie.title} />
    <Title>{movie.title}</Title>
    <Description>{movie.description}</Description>
    <Type>{movie.type},{movie.releaseYear}</Type>
  </Card>
);

export default MovieCard;
