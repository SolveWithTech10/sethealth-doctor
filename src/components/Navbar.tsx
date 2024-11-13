import React from "react";
import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <nav className="py-3">
      <Wrapper>
        <h3 className="text-2xl font-bold">Header</h3>
        <p className="text-sm subheading-text font-medium">
          Showing the overview of patients, appointments and revenue.
        </p>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
