"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Spinner } from "@/components/spinner";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";

const HeadingComponent = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="flex justify-between w-full p-4">
      <div className="flex items-center">
        <Link href="/">
          <p className="pr-4 text-2xl font-semibold cursor-pointer">Codegen</p>
        </Link>
        <Link href="/gentable">
          <p className="px-2 font-normal text-gray-400 hover:text-gray-600">
            All Gens
          </p>
        </Link>
        <Link href="/about">
          <p className="px-2 font-normal text-gray-400 hover:text-gray-600">
            About
          </p>
        </Link>
        <Link href="/guide">
          <p className="px-2 font-normal text-gray-400 hover:text-gray-600">
            Guide
          </p>
        </Link>
        <ModeToggle />
      </div>

      {isLoading && (
        <p>
          <Spinner />
        </p>
      )}

      {!isAuthenticated && !isLoading && (
        <div className="flex items-center">
          <SignInButton mode="modal">
            <button className="mx-2">Login</button>
          </SignInButton>
          <SignInButton mode="modal">
            <button>Register for CodeGen</button>
          </SignInButton>
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <div className="flex items-center">
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};

export default HeadingComponent;
