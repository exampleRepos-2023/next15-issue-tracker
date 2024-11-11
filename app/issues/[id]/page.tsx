import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
  params: {
    id: string;
  };
}

export default async function IssueDetailPage({ params }: Props) {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap={"4"}>
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap="3" align="center" my={"2"}>
          <IssueStatusBadge status={issue.status} />
          <Text weight={"bold"} size="2">
            {issue.createdAt.toDateString()}
          </Text>
        </Flex>
        <Card className="prose mt-4 dark:prose-invert">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
}
