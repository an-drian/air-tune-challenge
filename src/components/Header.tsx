import React, { FC } from "react";
import logo from "../assets/logo.svg";

type Props = {
  title?: string;
  children?: JSX.Element;
};

const Header: FC<Props> = React.memo(() => (
  <div className="
    h-16
    px-4
    py-2
    sticky
    top-0
    flex
    flex-row
    justify-between
    bg-gradient-to-r
    from-cyan-500
    to-blue-500
    items-center
    z-10
    ">
    <a href="/">
      <img src={logo} className="object-cover h-12" alt="logo" />
    </a>
    <div className="relative rounded-md shadow-sm">
      <input
        type="text"
        name="price"
        id="price"
        className="
          block
          rounded-md
          border-0
          pl-4 py-2
          pt-2.5
          text-gray-900
          placeholder:text-gray-400
          focus:ring-1
          focus:ring-inset
          focus:from-cyan-500
          sm:text-sm
          outline-none"
        placeholder="Filter stations by name"
      />
    </div>
  </div>
));

export default Header;
