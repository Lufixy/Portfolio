import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function darkTheme() {

  const cookies = new Cookies();
  const [isTheme, setTheme] = useState(cookies.get("theme") || "light");
  const colorTheme = isTheme === "dark" ? "light" : "dark";
  useEffect(
    () => {
      const root = window.document.documentElement;
      cookies.set("theme", isTheme);
      root.classList.remove(colorTheme);
      root.classList.add(isTheme);
      
    },
    [isTheme],
    colorTheme
  );
  return [colorTheme, setTheme];
}