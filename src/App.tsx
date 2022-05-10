import React, { FC } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { AppRouter } from './Components/AppRouter';

import { persistor, store } from './store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};
