import "./styles/tabs.css";

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }

  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    // remove all active classes from tabs
    this.tabs.forEach((tab) => tab.classList.remove("active"));
    // add active class to clicked tab
    e.target.classList.add("active");
  }
  toggleContent(e) {
    // remove all active classes from text content
    this.container
      .querySelectorAll(".content")
      .forEach((item) => item.classList.remove("active"));
    // add actove class to respective content
    const selectorAttr = e.target.getAttribute("data-target");
    const matchingContent = this.container.querySelector(selectorAttr);
    matchingContent.classList.add("active");
  }
}

export { Tabs as default };
