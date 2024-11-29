



export function toggleTheme(isDarkMode: boolean): void {
  const html = document.documentElement;

  if (isDarkMode) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}