import "./style.css";

import Tooltip from "./ui-components/tootip";
import Dropdown from "./ui-components/dropdown";
import Tabs from "./ui-components/tabs";

// create a tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.innit();

// create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const action = new Dropdown(dropdown);
  action.init();
});

// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();
