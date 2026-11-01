"use client";

// 현재 테마는 <html class="dark"> 여부로 판단합니다.
// 아이콘은 CSS(dark:)로 바꾸므로 첫 렌더링 때 깜빡임이 없습니다.
export default function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크 모드 전환"
      className="grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/45 text-stone-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_6px_18px_-10px_rgba(120,70,40,0.35)] backdrop-blur-xl transition-colors duration-300 hover:bg-white/65 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/70 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-300 dark:hover:bg-white/[0.1] dark:hover:text-white"
    >
      {/* 달 (라이트 모드에서 표시) */}
      <svg className="h-[18px] w-[18px] dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
      {/* 해 (다크 모드에서 표시) */}
      <svg className="hidden h-[18px] w-[18px] dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
