import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...AboutPage,
        path: '/about',
        exact: true,
      },
    ],
  },
];
