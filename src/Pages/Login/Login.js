import React from "react";
import auth from "../../firebase.init";
import { PrimaryButton } from "../Shared/PrimaryButton";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
export const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card mx-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-primary text-3xl">Login</h2>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">Continue With Google</button>
          <div className="card-actions justify-end">
            <PrimaryButton>Login</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
