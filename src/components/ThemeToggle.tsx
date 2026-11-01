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
      className="rounded-full border border-zinc-200 bg-white p-2 shadow-sm transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900"
    >
      <span className="block dark:hidden" aria-hidden>🌙</span>
      <span className="hidden dark:block" aria-hidden>☀️</span>
    </button>
  );
}
