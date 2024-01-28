"use client";

import { useQuery } from "convex/react";
import CreateButton from "../_components/create-button";
import { Gen, columns } from "./columns";
import { DataTable } from "./data-table";
import { api } from "@/convex/_generated/api";

// async function getData(): Promise<Gen[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       difficulty: 1,
//       status: "Completed",
//       gens: "Do this problem",
//     },
//     {
//       id: "728ed52f",
//       difficulty: 2,
//       status: "Incomplete",
//       gens: "Then try this",
//     },
//     {
//       id: "728ed52f",
//       difficulty: 3,
//       status: "Incomplete",
//       gens: "Watch out for this one!",
//     },
//     // ...
//   ];
// }

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
