import { signOut } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";

import Layout from "../Components/Layout";
import { useAppSelector } from "../util/hooks";
import { auth } from "../lib/firebase";
import { db } from "../lib/firebase";
import type { Post } from "../util/types";


export default function HomePage() {
  const user = useAppSelector(state => state.user.data);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const postCollection = useRef(collection(db, "post"));

  useEffect(() => {
    (async () => {
      try {
        const data = await getDocs(postCollection.current); 
        setPosts(data.docs.map(doc => ({...doc.data(), id: doc.id} as Post)))
      } catch (err) {
        console.log(err);
      }
    })()
  }, [])
        console.log(posts)

  return <Layout title="Home - Chirper">
    <main>
      {user?.email}
      <button onClick={async () => await signOut(auth)}>Sign Out</button>
    </main>
  </Layout>
}
