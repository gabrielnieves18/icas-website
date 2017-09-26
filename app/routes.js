// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

import { ROUTES } from './constants';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: ROUTES.INDEX,
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/reducers'),
          import('containers/Login/sagas'),
          import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: ROUTES.PKG_EDITOR,
      name: 'pkgEditor',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Editor/reducers'),
          import('containers/Editor/sagas'),
          import('containers/Editor'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('pkgEditor', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: ROUTES.HOME,
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Home/reducers'),
          import('containers/Home/sagas'),
          import('containers/Home'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: ROUTES.PROFILE,
      name: 'profile',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Profile/reducers'),
          import('containers/Profile/sagas'),
          import('containers/Profile'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('profile', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
