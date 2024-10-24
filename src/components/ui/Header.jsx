import { HiFilter, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useAppContext } from "../../context/AppContext";
import { darkModActions } from "../../context/AppActions";

function Header() {
  const {
    state: { isDarkModeState },
    dispatch,
  } = useAppContext();

  return (
    <div className="bg-white dark:bg-black/30">
      <div className="flex items-center justify-between h-20 container">
        <button
          onClick={() => dispatch({ type: darkModActions.TOGGLE_DARKMODE })}
        >
          {isDarkModeState.isDarkMode ? (
            <HiOutlineSun className="w-7 h-7 text-primary-900" />
          ) : (
            <HiOutlineMoon className="w-7 h-7 text-primary-900" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
