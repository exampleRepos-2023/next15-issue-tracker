import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReatMarkdown from "react-markdown";

interface Props {
  params: {
    id: string;
  };
}

export default async function IssueDetailPage({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" align="center" my={"2"}>
        <IssueStatusBadge status={issue.status} />
        <Text weight={"bold"} size="2">
          {issue.createdAt.toDateString()}
        </Text>
      </Flex>
      <Card className="prose dark:prose-invert mt-4">
        <ReatMarkdown>{issue.description}</ReatMarkdown>
      </Card>
    </div>
  );
}
