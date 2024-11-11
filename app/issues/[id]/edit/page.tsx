import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueForm from "../../_components/IssueForm";

interface Props {
  params: { id: string };
}

export default async function EditIssuePage({ params }: Props) {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
}
