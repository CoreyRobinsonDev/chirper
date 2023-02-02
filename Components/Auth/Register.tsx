import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../lib/firebase";

export default function Register() {
  const emailInputElement = useRef<HTMLInputElement>(null);
  const passwordInputElement = useRef<HTMLInputElement>(null);
  const confirmPasswordInputElement = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailInputElement.current!.value;
    const password = passwordInputElement.current!.value;
    const confirmPassword = confirmPasswordInputElement.current!.value;

    if (password !== confirmPassword) return setErrorMessage("Passwords do not match");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error:any) {
      switch (error.code) {
        case "auth/weak-password": return setErrorMessage("Passwords must be at least 6 characters or longer")
        default: return setErrorMessage(error.code);
      }
    }

    return setErrorMessage("");
  }

  return <form onSubmit={(e) => handleSubmit(e)}>
    <input ref={emailInputElement} type="email" name="email" placeholder="Email" required  />
    <input ref={passwordInputElement} type="password" name="password" placeholder="Password" required />
    <input ref={confirmPasswordInputElement} type="password" name="confirm_password" placeholder="Confirm Password" required />
    <button type="submit">Sign In</button>
    <p>{errorMessage}</p>
  </form>
}
