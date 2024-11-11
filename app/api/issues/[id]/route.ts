import { issueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 },
    );

  const updatedIssue = await prisma.issue.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });

  if (!updatedIssue)
    return NextResponse.json({ error: "Issue not found" }, { status: 404 });

  return NextResponse.json(updatedIssue, { status: 200 });
};
