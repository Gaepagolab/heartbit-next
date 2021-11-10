import React from "react";

import * as svg from "./svg";

export type IconType = keyof typeof svg;
export type IconProps = {
  name: IconType;
  className?: string;
  color?: string;
};

const Icon = ({ name, className, color }: IconProps) => {
  return React.createElement(svg[name], {
    className,
    color,
  });
};

export default Icon;
