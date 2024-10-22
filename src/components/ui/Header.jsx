import { HiFilter, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import SideDrawerModal from "../modal/SideDrawerModal";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { darkModActions } from "../../context/AppActions";
import FilterProducts from "../../features/products/components/FilterProducts";

function Header() {
  const {
    state: { isDarkModeState },
    dispatch,
  } = useAppContext();

  const [open, setOpen] = useState(false);
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
        <button className="" onClick={() => setOpen(true)}>
          <HiFilter className="w-7 h-7 text-primary-900" />
        </button>
        <SideDrawerModal
          open={open}
          title="Filter"
          onClose={() => setOpen(false)}
        >
          <FilterProducts onClose={() => setOpen(false)} />
        </SideDrawerModal>
      </div>
    </div>
  );
}

export default Header;
