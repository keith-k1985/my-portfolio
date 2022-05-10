import { About } from '../components/pages/About';
import { Admin } from '../components/pages/Admin';
import { Contact } from '../components/pages/Contact';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { Skill } from '../components/pages/Skill';
import { TodoPage } from '../components/pages/TodoPage';

export const HomeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/about',
    exact: false,
    children: <About />,
  },
  {
    path: '/skill',
    exact: false,
    children: <Skill />,
  },
  {
    path: '/contact',
    exact: false,
    children: <Contact />,
  },
  {
    path: '/todo',
    exact: false,
    children: <TodoPage />,
  },
  {
    path: '/login',
    exact: false,
    children: <Login />,
  },
  {
    path: '/admin',
    exact: false,
    children: <Admin />,
  },
  {
    path: '/*',
    exact: false,
    children: <Page404 />,
  },
];
