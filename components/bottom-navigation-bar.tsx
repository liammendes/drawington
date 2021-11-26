import classNames from "classnames";
import React from "react";

function BottomNavigationBar() {
  return (
    <footer className={classNames("fixed", "w-full", "bottom-4")}>
      <div className={classNames("flex", "justify-center")}>
        <div
          className={classNames(
            "pb-3",
            "pt-3",
            "pl-9",
            "pr-9",
            "rounded-3xl",
            "border-4",
            "border-solid",
            "items-center",
            "flex",
            "flex-col"
          )}
        >
          <div>
            <mwc-icon-button icon="add" id="addnote" />
          </div>
          <div>
            <span className={classNames("font-extrabold")}>Project</span>{" "}
            <span className={classNames("font-medium")}>Drawington</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BottomNavigationBar;
