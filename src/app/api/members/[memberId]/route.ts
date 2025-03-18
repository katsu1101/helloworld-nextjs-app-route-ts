import {TeamRepository} from "@/db/ teamRepository";
import {NextResponse}   from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { memberId: string  } }
) {
  const { memberId } = params; // URL から `memberId` を取得
  if (!memberId) {
    return NextResponse.json({ error: "Member ID is required" }, { status: 400 });
  }

  try {
    const repository = new TeamRepository();
    const member = await repository.getById(Number(memberId));
    if (!member) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    return NextResponse.json(member);
  } catch (error) {
    return NextResponse.json({ error: `Internal Server Error ${error}` }, { status: 500 });
  }
}