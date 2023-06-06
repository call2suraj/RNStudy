import * as React from 'react';
import { Provider } from 'react-redux';
import HamMenu from './src/components/HamburgerMenu';
import Landing from './src/screens/Landing'
import Menus from './src/screens/Menus'
import { Icon } from 'react-native-elements';
// Imports: Redux Store
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Menus />
    </Provider>
  );
}
 // <Landing />