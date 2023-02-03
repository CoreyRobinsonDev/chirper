import { useRouter } from "next/router";

import Register from "../Components/Auth/Register";
import LogIn from "../Components/Auth/LogIn";
import Layout from "../Components/Layout";
import { useAppSelector } from "../util/hooks";


export default function SignIn() {
  const user = useAppSelector(state => state.user);
  const router = useRouter();

  if (user) router.push("/");

  return <Layout title="Sign In - Chirper">
    <LogIn />
  </Layout>
}