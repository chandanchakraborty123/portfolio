import { useTheme } from "../theme/ThemeContext";

type ThemeToggleProps = {
  className?: string;
  compact?: boolean;
};

const ThemeToggle = ({ className = "", compact = false }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={className}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <i className={`bi ${isDark ? "bi-sun-fill" : "bi-moon-stars-fill"} ${compact ? "" : "me-2"}`}></i>
      {!compact && <span>{isDark ? "Light" : "Dark"} Mode</span>}
    </button>
  );
};

export default ThemeToggle;
