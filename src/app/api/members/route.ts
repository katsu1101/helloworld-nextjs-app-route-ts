import {TeamRepository} from "@/db/ teamRepository";
import {NextResponse}                   from "next/server";

export async function GET() {
  const repository = new TeamRepository();
  const members = await repository.getAll();
  return NextResponse.json(members);
}