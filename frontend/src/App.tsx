import { useRoutes } from 'react-router-dom';
import { routes } from './router/routes';

import './App.css';

const App = () => {
  const routing = useRoutes(routes);
  return routing;
};

export default App;