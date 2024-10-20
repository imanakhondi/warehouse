import { HiFilter, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../../hooks/useDarkMode";

function Header() {
  const { isDarkMode, toggleDarkMod } = useDarkMode();
  return (
    <div className="bg-white dark:bg-black/30">
      <div className="flex items-center justify-between h-20 container">
        <button onClick={toggleDarkMod}>
          {isDarkMode ? (
            <HiOutlineSun className="w-7 h-7 text-primary-900" />
          ) : (
            <HiOutlineMoon className="w-7 h-7 text-primary-900" />
          )}
        </button>
        <button className="">
          <HiFilter className="w-7 h-7 text-primary-900"/>
        </button>
      </div>
    </div>
  );
}

export default Header;
