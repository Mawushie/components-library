import React from "react";
import classnames from "classnames";

export default function Badge({ type = "square", children, color }) {
  let badgeType = type === "pill" ? "pill" : "square";
  let allClassNames = classnames("badge", badgeType, color);
  return <div className={allClassNames}>{children}</div>;
}
