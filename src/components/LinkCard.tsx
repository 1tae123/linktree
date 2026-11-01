"use client";

import type { LinkItem } from "@/data/profile";

// 링크를 열면서 클릭 수를 기록합니다.
// sendBeacon은 페이지를 벗어나도 요청이 전송되도록 보장합니다.
function trackClick(id: string) {
  const url = `/api/clicks/${encodeURIComponent(id)}`;
  if (navigator.sendBeacon?.(url)) return;
  fetch(url, { method: "POST", keepalive: true }).catch(() => {});
}

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(link.id)}
      onAuxClick={(e) => e.button === 1 && trackClick(link.id)}
      className={[
        "group relative block w-full rounded-[1.375rem] px-6 py-[1.125rem] text-center text-[15px] font-semibold tracking-[-0.01em]",
        // 글래스모피즘: 반투명 배경 + 흐림 + 얇은 밝은 테두리 + 위쪽 하이라이트
        "border border-white/70 bg-white/45 backdrop-blur-xl backdrop-saturate-150",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_30px_-14px_rgba(120,70,40,0.28)]",
        "dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_-14px_rgba(0,0,0,0.6)]",
        // 절제된 호버: 살짝 밝아지고 1px 떠오름
        "transition-[transform,background-color,box-shadow] duration-300 ease-out",
        "hover:-translate-y-px hover:bg-white/60 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_34px_-14px_rgba(120,70,40,0.34)]",
        "dark:hover:bg-white/[0.09]",
        "active:translate-y-0 active:duration-100",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/70",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
      ].join(" ")}
    >
      {link.title}
    </a>
  );
}
