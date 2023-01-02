import React, { useRef } from "react";
import classes from "./styles/index.module.css";

import { projects } from "../../data/projects";

type Project = {
  name: string;
  type: number;
  desc: string;
  link: string;
};

interface IFilterPanelPrps {
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[] | null>>;
}

function FilterPanel(props: IFilterPanelPrps) {
  const allBtn = useRef<HTMLButtonElement>(null);
  const filterOne = useRef<HTMLButtonElement>(null);
  const filterTwo = useRef<HTMLButtonElement>(null);
  const filterThree = useRef<HTMLButtonElement>(null);

  function toggleBtnState(button: HTMLButtonElement) {
    allBtn.current?.setAttribute("data-state", "deactive");
    filterOne.current?.setAttribute("data-state", "deactive");
    filterTwo.current?.setAttribute("data-state", "deactive");
    filterThree.current?.setAttribute("data-state", "deactive");

    const currentState = button.getAttribute("data-state");

    if (currentState == "active") {
      button.setAttribute("data-state", "deactive");
    } else {
      button.setAttribute("data-state", "active");
    }
  }

  function onClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    toggleBtnState(event.currentTarget);

    const filterValue = parseInt(event.currentTarget.value);

    if (filterValue == 0) {
      props.setFilteredProjects(projects);
      return;
    }

    let filteredProjects = projects.filter(
      (projectObj) => projectObj.type == filterValue
    );

    props.setFilteredProjects(filteredProjects);
  }

  return (
    <div
      className={`${classes.container} w-full h-fit my-4 p-1 grid grid-cols-4 auto-rows-auto items-center justify-between gap-1 flex-wrap bg-shade-3 rounded-md text-white font-bold`}>
      <button
        ref={allBtn}
        value={0}
        onClick={onClickHandler}
        className={`${classes.btn}`}
        data-state="active">
        All
      </button>
      <button
        ref={filterOne}
        value={1}
        onClick={onClickHandler}
        className={`${classes.btn}`}
        data-state="deactive">
        Type 01
      </button>
      <button
        ref={filterTwo}
        value={2}
        onClick={onClickHandler}
        className={`${classes.btn}`}
        data-state="deactive">
        Type 02
      </button>
      <button
        ref={filterThree}
        value={3}
        onClick={onClickHandler}
        className={`${classes.btn}`}
        data-state="deactive">
        Type 03
      </button>
    </div>
  );
}

export default FilterPanel;
