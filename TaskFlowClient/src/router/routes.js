import { renderLogin } from "../views/auth/login";
import { renderRegister } from "../views/auth/register";
import { renderHome } from "../views/home";

const routes = {
    "/": renderHome(),
    "/login": renderLogin,
    "/register": renderRegister
}