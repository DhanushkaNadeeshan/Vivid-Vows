import { FC, ReactNode } from "react";

interface NavbarProsp {
  children: ReactNode;
}

const Navbar: FC<NavbarProsp> = ({ children }) => {
  return <div className="sticky top-0 p-4 bg-white z-50">{children}</div>;
};

export default Navbar;
