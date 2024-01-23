"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Spinner } from "@/components/spinner";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";

const HeadingComponent = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="w-full p-4 flex justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold pr-4">Codegen</h1>
        <Link href="/gentable" className="px-2 font-normal text-gray-400">All Gens</Link>
        <p className="px-2 font-normal text-gray-400">About</p>
        <p className="px-2 font-normal text-gray-400">Guide</p>
        <ModeToggle />
      </div>
      {isLoading && (
        <p>
          <Spinner />
        </p>
      )}

      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <button>Login</button>
          </SignInButton>
          <SignInButton mode="modal">
            <button>Register for CodeGen</button>
          </SignInButton>
        </>
      )}
      {isAuthenticated && !isLoading && (
        <div className="flex items-center">
          <button>
            <UserButton afterSignOutUrl="/" />
          </button>
        </div>
      )}
    </div>
  );
};

export default HeadingComponent;
