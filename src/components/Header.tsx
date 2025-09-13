import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  // Sync theme
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Sync language
  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
            {/* Top Bar */}
      <div className="bg-news-secondary text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>
              📅{" "}
              {new Date().toLocaleDateString("en-IN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>🌡️ Delhi: 25°C</span>
            <span>📈 Sensex: 75,234.56 ▲ 1.2%</span>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-news-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-foreground">
                Mukhbeeri
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">NEWS</p>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder={t("searchPlaceholder")} className="pl-10 border-border" />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="hidden md:flex">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Subscribe */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:block border-news-primary text-news-primary hover:bg-news-primary hover:text-white"
            >
              {t("subscribe")}
            </Button>

            {/* Language Switch */}
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[100px] border-news-primary text-news-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिन्दी</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <nav className={`${isMenuOpen ? "block" : "hidden"} md:block border-t border-border`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap space-x-6 py-3">
          {Object.entries(t("categories", { returnObjects: true })).map(([key, value]) => (
            <Link key={key} to={`/category/${key}`} className="text-sm font-medium text-foreground hover:text-news-primary">
              {value}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
