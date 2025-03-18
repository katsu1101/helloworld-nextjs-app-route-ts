export async function fetchBlogPosts() {
  // 仮のデータ（本番はDBやAPIから取得）
  return [
    { id: 1, title: "Next.js 14 の新機能", content: "Server Components が進化..." },
    { id: 2, title: "App Router の使い方", content: "ページ構成を変更する方法..." }
  ];
}
