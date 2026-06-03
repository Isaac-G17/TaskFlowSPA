import { getSession } from "../services/auth.service";
import { notFoundView, routes } from "./routes";

export function renderRoute() {
  const app = document.getElementById("app");
  const currentPath = window.location.pathname;
  const route = routes[currentPath] ?? { render: notFoundView };

  const session = getSession()

  if(route.redirectIfAuthenticated && session){
    window.history.replaceState({},"","/dashboard")
    renderRoute()
    return
  }

  if(route.requiresAuth && !session){
    window.history.replaceState({}, "", "/login")
    renderRoute()
    return
  }

  if(route.allowedRoles && !route.allowedRoles.some((role) => session.role?.includes(role))){
    window.history.replaceState({}, "", "/dashboard")
    renderRoute()
    return
  }

  app.innerHTML = route.render();

  if (route.setup) {
    route.setup();
  }
}

export function initRouter(){
    document.addEventListener("click", (event) => {
        const link = event.target.closest("a");

        if (!link) {
            return;
        }
        
        const href = link.getAttribute("href");

        if(!href || !href.startsWith("/")){
            return;
        }

        event.preventDefault(); 
        window.history.pushState({}, "", href);
        renderRoute();
    });
    
    window.addEventListener("popstate", renderRoute);
    renderRoute();     
}
