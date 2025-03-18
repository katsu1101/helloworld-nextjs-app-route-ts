import Footer      from "@/app/welcome/components/Footer";
import Main        from "@/app/welcome/components/Main";
import clsx        from "clsx";

export default function Home() {
  return <div
    className={clsx(
      // 1️⃣ レイアウト系
      "grid-rows-[20px_1fr_20px] items-center justify-items-center",

      // 2️⃣ 余白・間隔系
      "gap-16 sm:p-20",

      // 3️⃣ フォント・テキスト系
      "font-[family-name:var(--font-geist-sans)] "
    )}>
    <Main/>
    <Footer/>
  </div>
}
