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
      title: "My new problem",
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
