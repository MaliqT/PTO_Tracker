import { createShell } from '../components/shell.js';

const app = document.getElementById("app");
const shell = createShell();

app.replaceChildren(shell);

const pageContent = document.getElementById("page-content");
const p = document.createElement("p");

p.textContent = "Dashboard content coming soon";
pageContent.append(p);