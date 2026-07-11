"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="hidden h-[18px] w-[18px] dark:block" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.5 15.3A8.5 8.5 0 0 1 8.7 3.5a8.5 8.5 0 1 0 11.8 11.8Z" />
      </svg>
    </button>
  );
}
