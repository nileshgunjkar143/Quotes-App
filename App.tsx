import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/components/navigation/RootNavigation';
import MyTab from './src/components/layouts/MyTab';
import AppStatusBar from './src/components/layouts/AppStatusBar';
import {persistor, store} from './src/redux/store/store';
import { Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

const THEME_COLOR = '#1e2225';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <>
            <AppStatusBar backgroundColor={THEME_COLOR} />
            <MyTab />
          </>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
