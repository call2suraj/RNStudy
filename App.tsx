import * as React from 'react';
import { Provider } from 'react-redux';
import LandingScreen from './src/screens/LandingScreen'
import { Icon } from 'react-native-elements';
// Imports: Redux Store
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <LandingScreen />
    </Provider>
  );
}
