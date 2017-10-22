// Initiate app
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
// import {Provider} from 'react-redux';

// import configureStore from 'redux/store/configureStore';
import Root from './routes/Root';

// const store = configureStore({});

const renderApp = App => {
  render(
    <AppContainer>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </AppContainer>,
    document.getElementById('app-root')
  );
};

renderApp(Root);

/**
 * Enable hot-reloading in non-production environment
 * @reference https://github.com/gaearon/react-hot-loader/issues/243#issuecomment-244610419
 */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes/Root', () => { renderApp(Root); });
}
