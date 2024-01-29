"use client";

import { useQuery } from "convex/react";
import CreateButton from "../_components/create-button";
import { Gen, columns } from "./columns";
import { DataTable } from "./data-table";
import { api } from "@/convex/_generated/api";

export default function DemoPage() {
  const data = useQuery(api.documents.get);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container flex justify-center w-full py-10 mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="container flex justify-center w-full py-10 mx-auto">
        <CreateButton />
      </div>
      <div className="container flex flex-col justify-center w-full py-10 mx-auto">
        <h4>Todo</h4>
        <ul className="flex flex-col">
          <li>High score list</li>
          <li>Timer</li>
          <li>Keep sidebar just in gens? Not main table?</li>
          <li>Rooms where you can solve problems together</li>
        </ul>
      </div>
    </div>
  );
}
