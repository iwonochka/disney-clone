import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import HomeLayout from '../components/HomeLayout';
import { MovieListType } from '../types/MovieList';
import { GetServerSideProps } from 'next';
import { Spinner } from '../components/Spinner/spinner';

interface Props {
  movieResult: MovieListType[]
}


export default function Home({movieResult}: Props) {

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <Spinner/>

  return <HomeLayout movieResult={movieResult}/>


  }

  export const getServerSideProps: GetServerSideProps = async () => {
    const movieResult = await fetch(`https://disney-clone-ivory.vercel.app/api/movies`).then((res) => res.json())
    return {
      props: {
        movieResult
      }
    }
  }
