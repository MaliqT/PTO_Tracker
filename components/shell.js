// This file is to create reusable components to build the webpage
// This file will create a shell component that ultimately ties in a few functions together


function createNavLink(label, route, isActive) {
    const newLink = document.createElement("a");
    newLink.classList.add("nav-link");
    newLink.textContent = label;
    newLink.href = `#/${route}`;
    newLink.dataset.page = route;

    if (isActive === true) {
        newLink.classList.add("active");
        newLink.ariaCurrent = "page";
    }

    return newLink;
}

function createSidebar() {
    const sidebar = document.createElement("aside");
    sidebar.classList.add("sidebar");

    const brandContainer = document.createElement("div");
    brandContainer.classList.add("brand");

    const brandMark = document.createElement("span");
    brandMark.classList.add("brand-mark");
    brandMark.textContent = "P";

    const brandName = document.createElement("span");
    brandName.classList.add("brand-name");
    brandName.textcontent = "PTO Tracker";

    brandContainer.append(brandMark, brandName);

    const navContainer = document.createElement("nav");
    navContainer.classList.add("sidebar-nav");
    navContainer.ariaLabel = "Primary navigation"

    const Dashboard = createNavLink("Dashboard", "dashboard", true);
    const Requests = createNavLink("Requests", "requests", false);
    const Settings = createNavLink("Settings", "settings", false);

    navContainer.append(Dashboard, Requests, Settings);
    sidebar.append(brandContainer, navContainer);

    return sidebar;
}

function createTopbar(title, subtitle) {
    const header = document.createElement("header");
    header.classList.add("topbar");

    const textContainer = document.createElement("div");
    textContainer.classList.add("topbar-content");

    const pageTitle = document.createElement("h1");
    pageTitle.textContent = title;
    const pageSubtitle = document.createElement("p");
    pageSubtitle.textContent = subtitle;

    textContainer.append(pageTitle, pageSubtitle);
    header.append(textContainer);

    return header;
}

export function createShell() {
    const shellDiv = document.createElement("div");

    const container = document.createElement("div");
    container.classList.add("app-shell");

    const sidebar = createSidebar();
    const workspace = document.createElement("div");
    workspace.classList.add("main-area");

    const topbar = createTopbar("Dashboard", "Your time off");

    const pageContent = document.createElement("main");
    pageContent.id = "page-content";
    pageContent.classList.add("page-content");

    workspace.append(topbar, pageContent);
    shellDiv.append(sidebar, workspace);

    return shellDiv;
}