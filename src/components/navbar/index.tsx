import { useCallback, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Link from "./Link";
import ActionButton from "../Buttons/ActionButton";
import Logo from "../../assets/Logo.png";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};


const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-primary-100 drop-shadow bg-opacity-75";
  
  const handleCloseMenu = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuToggled) {
        setIsMenuToggled(false)
      }
    },

    [isMenuToggled]
  )

  useEffect(() => {
    if (isMenuToggled) {
      document.addEventListener("keydown", handleCloseMenu)
    }

    return () => {
      document.removeEventListener("keydown", handleCloseMenu)
    }
  },[handleCloseMenu, isMenuToggled])
  
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  {/* <p>Home</p>
                <p>Benefits</p>
                <p>Our Classes</p>
                <p>Contact Us</p> */}
                </div>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {/* <p>Sign In</p> */}
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className={`rounded-full bg-secondary-500 p-2`}
                  onClick={() => {
                    setIsMenuToggled(!isMenuToggled);
                  }}
                >
                  <Bars3Icon className={`col h-6 w-6 text-white`} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div
          className={`fixed right-0 top-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl`}
        >
          {/* CLOSE ICON */}
          <div className={`flex justify-end p-12`}>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className={`h-6 w-6 text-gray-400`} />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
