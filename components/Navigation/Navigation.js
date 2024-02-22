import React from "react";

const Navigation = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p className="f3 link dim black underline pa3 pointer black">Sign In</p>
      <p className="f3 link dim black underline pa3 pointer black">Sign Out</p>
    </nav>
  );
};

export default Navigation;
