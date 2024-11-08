"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface IssueForm {
  title: string;
  description: string;
}

export default function NewIssuePage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        axios.post("/api/issues", data);

        router.push("/issues");
      })}
    >
      <TextField.Root
        placeholder="Title"
        {...register("title")}
      ></TextField.Root>
      <TextArea
        placeholder="Description"
        {...register("description")}
      ></TextArea>
      <Button>Submit New Issue</Button>
    </form>
  );
}
