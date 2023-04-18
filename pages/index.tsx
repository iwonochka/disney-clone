import { useSession } from 'next-auth/react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HomeLayout from '../components/HomeLayout';
import { MovieListType } from '../types/MovieList';
import { GetServerSideProps } from 'next';

interface Props {
  movieResult: MovieListType[]
}


export default function Home({movieResult}: Props) {

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      //redirecting to homepage
      router.push({
        pathname: "/login",
      });
    }
    return () => {};
  }, []);

  if (status === "loading") return <p>Loading</p>;

  if (session)
    return (
      <>
        <HomeLayout movieResult={movieResult}>

        </HomeLayout>
      </>
    )

  }

  export const getServerSideProps: GetServerSideProps = async () => {
    const movieResult = await fetch("http://localhost:3000/api/movies").then((res) => res.json())
    return {
      props: {
        movieResult
      }
    }
  }
