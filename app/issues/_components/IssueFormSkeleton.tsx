import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

export default function IssueFormSkeleton() {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" />
      <Skeleton height="6rem" />
    </Box>
  );
}
