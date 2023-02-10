import Router from "next/router";
import { useEffect } from "react";
import { signInWithPopup } from "firebase/auth";

import LogIn from "../Components/Auth/LogIn";
import Layout from "../Components/Layout";
import { useAppSelector } from "../util/hooks";
import { auth, googleProvider } from "../lib/firebase";


export default function SignInPage() {
  const user = useAppSelector(state => state.user.data);

  useEffect(() => {
    if (user) Router.push("/");
  }, [user])

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  }

  return <Layout title="Sign In - Chirper">
    <>
      <LogIn />
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  </Layout>
}