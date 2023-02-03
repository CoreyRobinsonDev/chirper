import { useRouter } from "next/router";

import Layout from "../Components/Layout";
import { useAppSelector } from "../util/hooks";


export default function Home() {
  const user = useAppSelector(state => state.user);
  const router = useRouter();

  if (!user) router.push("/sign-in");

  return <Layout title="Home - Chirper">
    <main>
      {user?.email}
    </main>
  </Layout>
}
