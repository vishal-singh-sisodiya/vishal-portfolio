const themes = {
  blue: "#38bdf8",
  purple: "#a855f7",
  green: "#22c55e",
  orange: "#f97316",
};

export default function ThemeSwitcher() {
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="fixed top-24 right-6 flex gap-2 bg-[#111827] p-2 rounded-full shadow-lg z-50">
      {Object.keys(themes).map((theme) => (
        <button
          key={theme}
          onClick={() => setTheme(theme)}
          className="w-4 h-4 rounded-full border border-white/20 hover:scale-110 transition"
          style={{ backgroundColor: themes[theme] }}
        />
      ))}
    </div>
  );
}
