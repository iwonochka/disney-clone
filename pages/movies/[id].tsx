import { GetStaticPaths, GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import { MovieListType } from '../../types/MovieList';
import { ParsedUrlQuery } from 'querystring';
import ShowpageLayout from '../../components/ShowpageLayout';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Spinner } from '../../components/Spinner/spinner';

interface Props {
  movieResults: MovieListType;
}

export default function Showpage({movieResults}: Props) {

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <Spinner/>;

  return <ShowpageLayout movieResults={movieResults} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://disney-clone-ivory.vercel.app/api/movies`);

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

  const movieResults = await fetch(`https://disney-clone-ivory.vercel.app/api/movies/${id}`)
  .then((res) => res.json());

  return {
    props: {
      movieResults,
    },
    revalidate: 1000,
  };
}
