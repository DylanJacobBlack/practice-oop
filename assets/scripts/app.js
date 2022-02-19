class ToolTip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }

  connectMoreInfoButton();
  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn.addEventListener('click', switchButtonHandler)
  };
}

class ProjectsList {
  projects = [];

  constructor(type, switcherHandlerFunction) {
    this.type = type;
    this.switchHandler = switcherHandlerFunction;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
  }

  addProject() {}

  switchProject(projectId) {
    this.switchHandler(this.projects.find(project => project.id = projectId))
    this.projects = this.projects.filter(project => project.id !== project.id);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectsList("active");
    const finishedProjectsList = new ProjectsList("finished");
  }
}

App.init();
