import { useState, useEffect } from "react";

export default function LanguagueDropdown() {
  // Get saved language from localStorage (default to "en")
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  // Save to localStorage whenever lang changes
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className="">
      <select
        value={lang}
        name="lang"
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">En</option>
        <option value="ar">Ar</option>
      </select>
    </div>
  );
}
