import {TeamMember} from "@/types/team";

// 仮のデータ（今はハードコード、後でDBに移行）
const members: TeamMember[] = [
  {id: 1, name: "Alice", role: "Founder", image: "/team/Alice.webp"},
  {id: 2, name: "Bob", role: "Developer", image: "/team/Bob.webp"},
  {id: 3, name: "Charlie", role: "Designer", image: "/team/Charlie.webp"},
]

export class TeamRepository {
  /**
   * 全メンバーを取得
   * - 現在: ハードコード
   * - 将来: DB に接続
   */
  async getAll(): Promise<TeamMember[]> {
    return members;
  }

  /**
   * メンバーIDから取得
   * - 現在: ハードコード
   * - 将来: DB に接続
   */
  async getById(memberId: number): Promise<TeamMember | null> {
    return members.find(member => member.id === memberId) || null; // ❗ 将来は `prisma.teamMember.findUnique();`
  }
}