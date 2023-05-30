import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { MovieListType } from '../../types/MovieList';
import { ParsedUrlQuery } from 'querystring';
import ShowpageLayout from '../../components/ShowpageLayout';

interface Props {
  movieResults: MovieListType;
}

export default function Showpage({movieResults}: Props) {
  console.log(movieResults, "id page")
  return (
    <ShowpageLayout movieResults = {movieResults}/>


  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://movies-api-wine.vercel.app/api/movie");
  const movieData = await res.json();

  const paths = movieData?.map((movie: MovieListType) => ({
    params: { id: String(movie.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface ContextParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as ContextParams;

  const movieResults = await fetch(
    `http://localhost:3000/api/movies/${id}`
  ).then((res) => res.json());

  return {
    props: {
      movieResults,
    },
    revalidate: 1000,
  };
}
