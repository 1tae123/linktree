import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
// Pretendard: 한글·영문 모두 둥글고 단정한 산세리프. 글자 범위별로 쪼개진 파일이라 필요한 부분만 내려받습니다.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: profile.bio,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf3ea" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1513" },
  ],
};

// 페이지가 그려지기 전에 테마를 적용해 화면 깜빡임을 막습니다.
// 저장된 설정이 없으면 기기 설정(다크/라이트)을 따릅니다.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" suppressHydrationWarning className="h-full antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
