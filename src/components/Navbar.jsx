import React from 'react'
import Image from "./Image"
import logo from "../assets/Logo.png"
import List from "./layouts/List"
import ListItem from "./layouts/ListItem"
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {

  return (
    <div className=" flex bg-red-200 max-w-container mx-auto">
      <div className="w-3/12 pl-3">
        <Image src={logo} />
      </div>
      <div className="w-9/12">
        <List className="uppercase hidden lg:flex md:flex justify-center gap-x-10 font-dm text-sm font-regular">
          <ListItem className="hover:font-bold" item="Home" />
          <ListItem className="hover:font-bold" item="Shop" />
          <ListItem className="hover:font-bold" item="About" />
          <ListItem className="hover:font-bold" item="Contacts" />
          <ListItem className="hover:font-bold" item="Journal" />
        </List>
      </div>
    </div>
  )
}

export default Navbar
