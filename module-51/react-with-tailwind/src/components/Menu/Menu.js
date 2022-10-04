import React from "react";

const Menu = (props) => {
  const { route } = props;
  const { id, path, name } = route;
  return (
    <div>
      <li className="mr-4" key={id}>
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

export default Menu;
