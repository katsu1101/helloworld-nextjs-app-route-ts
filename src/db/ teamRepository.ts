import {PrismaClient, TeamMember} from "@prisma/client";


const prisma = new PrismaClient();

export class TeamRepository {
  /**
   * 全メンバーを取得
   */
  async getAll(): Promise<TeamMember[]> {
    return prisma.teamMember.findMany();
  }

  /**
   * メンバーIDから取得
   */
  async getById(memberId: number): Promise<TeamMember | null> {
    return prisma.teamMember.findUnique({
      where: {id: memberId},
    });
  }

  /**
   * 新しいメンバーを作成
   */
  async create(member: Omit<TeamMember, "id">): Promise<TeamMember> {
    return prisma.teamMember.create({
      data: member,
    });
  }

  /**
   * メンバーを更新
   */
  async update(memberId: number, data: Partial<Omit<TeamMember, "id">>): Promise<TeamMember | null> {
    return prisma.teamMember.update({
      where: {id: memberId},
      data,
    });
  }

  /**
   * メンバーを削除
   */
  async delete(memberId: number): Promise<TeamMember | null> {
    return prisma.teamMember.delete({
      where: {id: memberId},
    });
  }
}
