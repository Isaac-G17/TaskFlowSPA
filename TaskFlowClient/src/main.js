import "./styles/global.css";
import { renderRegister } from "./views/auth/register";
import { renderHome } from "./views/home";

const app = document.getElementById('app');

app.innerHTML = renderRegister();