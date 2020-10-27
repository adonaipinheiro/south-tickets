import React from 'react';
import { Provider } from 'react-redux';

// Store
import { store } from './store';

// Routes
import Routes from './routes';

// Global Styles
import GlobalStyles from './styles/global';

// Global Components
import Toast from './components/ToastContainer';

function App() {
  return (
    <>
      <Provider store={store}>
        <Toast />
        <Routes />
        <GlobalStyles />
      </Provider>
    </>
  );
}

export default App;
