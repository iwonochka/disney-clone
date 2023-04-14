import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SignUp from "../components/SignUp";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      //redirecting to homepage
      router.push({
        pathname: "/",
      });
    }
    return () => {};
  }, []);

  if (status === "loading") return <p>Loading</p>;

  if (!session)
    return (
      <>
        <SignUp />
      </>
    );
}
