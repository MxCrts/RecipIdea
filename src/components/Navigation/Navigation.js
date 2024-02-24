import React from "react";

const Navigation = ({ children }) => {
  return (
    <div className="tc">
      <nav>{children}</nav>
    </div>
  );
};

export default Navigation;
