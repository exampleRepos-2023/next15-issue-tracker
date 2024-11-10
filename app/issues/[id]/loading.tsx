import { Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingIssueDetailPage() {
  return (
    <div>
      <Skeleton />
      <Flex gap="3" align="center" my={"2"}>
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose mt-4 dark:prose-invert">
        <Skeleton count={3} />
      </Card>
    </div>
  );
}
