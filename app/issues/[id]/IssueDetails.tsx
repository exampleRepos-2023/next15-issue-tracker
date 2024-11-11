import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

export default function IssueDetails({ issue }: { issue: Issue }) {
  return (
    <>
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
    </>
  );
}
