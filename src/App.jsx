import Image from "./components/Image";
import logo from "../src/assets/Logo.png";
import List from "./components/layouts/List";
import ListItem from "./components/layouts/ListItem";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import Flex from "./components/Flex";
import { useEffect, useState } from "react";

function App() {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth(e) {
      if (window.innerWidth<1024) {
        setShow(false);
      }
      else{
        setShow(true)
      }
    }

    window.addEventListener("resize", scrollWidth);
  });

  return (
    <div className=" flex bg-red-200 max-w-container mx-auto">
      <div className="w-3/12 pl-3">
        <Image src={logo} />
      </div>
      <div className="w-9/12">
        <HiMiniBars3CenterLeft onClick={(setShow) => setShow(!show)} className="ml-auto block lg:hidden md:hidden" />
        <List className="hidden lg:flex md:flex justify-center gap-x-10 font-dm text-sm font-regular">
          <ListItem className="hover:font-bold" item="Home" />
          <ListItem className="hover:font-bold" item="Shop" />
          <ListItem className="hover:font-bold" item="About" />
          <ListItem className="hover:font-bold" item="Contacts" />
          <ListItem className="hover:font-bold" item="Journal" />
          {/* <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li> */}
        </List>
      </div>
    </div>
  );
}

export default App;
