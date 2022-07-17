import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];


    const createAnchors = links.map((link) => (
      <a key={link} href={'#' + link}>
        {link}
      </a>
    ))
  return <nav>{createAnchors}</nav>;
}

export default NavBar;
