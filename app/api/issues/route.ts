import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const schema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 },
    );

  const newIssue = await prisma.issue.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
};