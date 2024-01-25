"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";

const GenLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner size="large" />
      </div>
    );

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="flex h-full ">
      <Navigation />
      <main className="w-full h-full overflow-y-auto ">{children}</main>
    </div>
  );
};

export default GenLayout;
