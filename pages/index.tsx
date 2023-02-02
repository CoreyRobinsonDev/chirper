import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import Layout from "../Components/Layout";
import { auth } from "../lib/firebase";
import type { User } from "../util/types";

export default function Home() {
  const [user, setUser] = useState<User | null>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser({ ...user.providerData[0], uid: user.uid });
    } else {
      setUser(null);
    }
  })

  return <Layout title="Home - Chirper">
    <main>
      {user?.email}
    </main>
  </Layout>
}
