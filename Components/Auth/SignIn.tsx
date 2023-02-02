import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../lib/firebase";

export default function SignIn() {
  const emailInputElement = useRef<HTMLInputElement>(null);
  const passwordInputElement = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  }

  return <form onSubmit={(e) => handleSubmit(e)}>
    <input ref={emailInputElement} type="email" name="email" placeholder="Email" required  />
    <input ref={passwordInputElement} type="password" name="password" placeholder="Password" required />
    <button type="submit">Sign In</button>
  </form>
}