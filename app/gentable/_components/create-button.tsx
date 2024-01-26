"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const CreateButton = () => {
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "Merge Intervals",
      genQuestion:
        "Given an array of intervals where each interval is represented by a pair of integers (start, end), merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      genExamples:
        "Input: intervals = [[1,3],[2,6],[8,10],[15,18]] Output: [[1,6],[8,10],[15,18]] Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
      constraints:
        "The input array of intervals is not necessarily sorted.Each interval's start and end points are inclusive and non-negative integers.",
      givenCode: `function mergeIntervals(intervals) {
        // Your code here
    }`,
      testCases: "",
      notes: "",
    });

    toast.promise(promise, {
      loading: "Creating a new problem",
      success: "New Problem created",
      error: "Something went wrong",
    });
  };

  return (
    <div>
      <p>Create your own problem</p>
      <Button variant="outline" onClick={onCreate}>
        <PlusCircle className="w-6 h-6 mr-2" />
        Button
      </Button>
    </div>
  );
};

export default CreateButton;
