import { Toaster as Sonner, type ToasterProps } from "sonner";
import { useEffect, useState } from "react";

const Toaster = ({ ...props }: ToasterProps) => {
  // Estado simples para armazenar o tema, sem next-themes
  const [theme, setTheme] = useState<ToasterProps["theme"]>("light");

  useEffect(() => {
    // Detecta tema do sistema
    const dark = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      setTheme(dark.matches ? "dark" : "light");
    };

    updateTheme();
    dark.addEventListener("change", updateTheme);

    return () => dark.removeEventListener("change", updateTheme);
  }, []);

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)"
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
