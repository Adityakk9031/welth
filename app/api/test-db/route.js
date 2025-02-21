import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function GET() {
  try {
    await db.$connect();
    const users = await db.user.findMany();
    return NextResponse.json({ message: "Connected Successfully!", users });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
