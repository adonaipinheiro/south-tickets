import React from 'react';
import { Provider } from 'react-redux';

// Store
import { store } from './store';

// Routes
import Routes from './routes';

// Global Styles
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
