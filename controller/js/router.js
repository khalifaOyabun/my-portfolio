const route = (e) => {
    e = event;
    e.preventDefault();
    window.history.pushState({}, "", e.target.href);
    handleLocation();
}

const routes = {
    404: "/views/html/404.html",
    "/": "/views/html/index.html",
    "/about": "/views/html/about.html",
    "/hireme": "/views/html/hireme.html",
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes.path || routes[404];
    const html = await fetch(route).then(data => data.text());
    const mainPage = document.getElementById("main-page");
    mainPage.innerHTML = html;
}

window.onpopstate = handleLocation();
window.route = route;

handleLocation();
