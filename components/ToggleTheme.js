import { useEffect, useState } from "react";

export default function ToggleTheme() {
    const [theme, setTheme] = useState("light");


    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <button onClick={toggleTheme} className="btn btn-primary" aria-label="Toggle Dark Mode">
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
    );
}
