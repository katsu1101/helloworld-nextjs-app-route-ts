import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 既存データを削除（リセットしたい場合）
  await prisma.teamMember.deleteMany();

  // 新しいデータを作成
  await prisma.teamMember.createMany({
    data: [
      {name: "Alice", role: "Founder", image: "/team/Alice.webp"},
      {name: "Bob", role: "Developer", image: "/team/Bob.webp"},
      {name: "Charlie", role: "Designer", image: "/team/Charlie.webp"},
    ],
  });

  console.log("Seed data inserted.");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
