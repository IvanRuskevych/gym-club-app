import { useEffect, useState } from "react";

import Navbar from "@/components/navbar";

import { SelectedPage } from "@/shared/types";
import Home from "./components/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home); // selected page by default
      }
      if (window.screenY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
