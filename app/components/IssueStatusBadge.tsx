import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

type BadgeType = {
  label: string;
  color: "green" | "yellow" | "red";
};

const statusMap: Record<Status, BadgeType> = {
  OPEN: { label: "Open", color: "green" },
  IN_PROGRESS: { label: "In Progress", color: "yellow" },
  CLOSED: { label: "Closed", color: "red" },
};

export default function IssueStatusBadge({ status }: { status: Status }) {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
}
