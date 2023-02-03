import Head from "next/head"
import { useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from "../lib/firebase";
import { setUser } from '../lib/features/userSlice';
import { useAppDispatch } from "../util/hooks";

type Props = {
  title?: string,
  children: React.ReactElement
}


export default function Layout({title = "Chirper", children}: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userObj = { ...user.providerData[0], uid: user.uid };
        dispatch(setUser(userObj))
      }
    })
  }, [dispatch])

  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Second best bird app." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      {children}
  </>
}