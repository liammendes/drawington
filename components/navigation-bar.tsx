import React from "react";
import classNames from "classnames";
import MendesLogo from "../components/icon/mendes";

function NavigationBar() {
  return (
    <header className={classNames("fixed", "w-full", "top-0")}>
      <div className={classNames("flex", "justify-center")}>
        <div
          className={classNames(
            "p-6",
            "rounded-bl-3xl",
            "rounded-br-3xl",
            "border-b-4",
            "border-l-4",
            "border-r-4",
            "border-solid"
          )}
        >
          <MendesLogo />
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
