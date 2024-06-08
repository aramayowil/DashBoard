import React from "react";
import "./styles/LogoSideBar.css";

function LogoSideBar() {
  return (
    <div className="logo-icon">
      <img
        src="../../public/img/logoEmmaThemeDark.png"
        alt="logo-react"
        style={{
          width: "145px",
          height: "auto",
          display: "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </div>
  );
}

export default LogoSideBar;
