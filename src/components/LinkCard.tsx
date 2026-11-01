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
      className="block w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-zinc-700 dark:bg-zinc-900"
    >
      {link.title}
    </a>
  );
}
