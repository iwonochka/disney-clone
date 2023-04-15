import { useSession } from 'next-auth/react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SignUp from '../components/SignUp';
import HomeLayout from '../components/HomeLayout';


export default function Home() {

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
        <HomeLayout>

        </HomeLayout>
      </>
    )


}
