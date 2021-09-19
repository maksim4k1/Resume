import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

const routers = [
  {path: "/", component: Home, exact: true},
  {path: "/about", component: About, exact: true},
  {path: "/resume", component: Resume, exact: true},
  {path: "/portfolio", component: Portfolio, exact: true},
  {path: "/contacts", component: Contacts, exact: true},
];

export default routers;