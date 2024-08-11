import { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const themes = {
  cupcake: "cupcake",
  dark: "dracula",
};
const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.cupcake;
};
const Navbar = () => {

    const [theme, setTheme] = useState(getThemeFromLocalStorage());
    const toggleTheme = () => {
      const { cupcake, dark } = themes;
      const newTheme = theme == cupcake ? dark : cupcake;
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", theme);
    };
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);

    return (
      <div className=" h-[4rem] bg-base-300 sticky top-0 px-6 z-10">
        <div className="max-w-4xl mx-auto flex justify-between ">
          <Link
            to={"/"}
            className="mt-5 h-[2rem] w-[2rem] rounded-lg flex items-center justify-center bg-primary"
          >
            Aa
          </Link>
          <label className="swap swap-rotate translate-y-[10px]">
            <input type="checkbox" onChange={toggleTheme} />
            <BsMoonFill className="swap-on h-4 w-4" />
            <BsSunFill className="swap-off h-4 w-4" />
          </label>
        </div>
      </div>
    );
};
export default Navbar;
