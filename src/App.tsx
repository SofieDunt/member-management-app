import React, { useState } from 'react';
import 'antd/dist/antd.css';
import ListScreen from './screens/listScreen';
import AddScreen from './screens/addScreen';
import EditScreen from './screens/editScreen';
import styled from 'styled-components';
import { BACKGROUND_GREY } from './theme';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppMembers } from './ducks/types';

// The div containing the entire App
const AppLayout = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  background: ${BACKGROUND_GREY};
`;

// An enum for each screen in the app to use for navigation
export enum Screens {
  LIST,
  ADD,
  EDIT,
}

// Props for each screen, enabling display/modification of members and navigation
export interface ScreenProps {
  readonly members: AppMembers;
  readonly setCurrentScreen: (currentScreen: CurrentScreenProps) => void;
}

// Props for navigation, indicating the current screen and member (if any) being displayed
export interface CurrentScreenProps {
  readonly screen: Screens;
  readonly member?: number;
}

// The main component of the application, handles navigation between screens
const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<CurrentScreenProps>({
    screen: Screens.LIST,
  });

  return (
    <Provider store={store}>
      <AppLayout>
        {(() => {
          switch (currentScreen.screen) {
            case Screens.LIST:
              return <ListScreen setCurrentScreen={setCurrentScreen} />;
            case Screens.ADD:
              return <AddScreen setCurrentScreen={setCurrentScreen} />;
            case Screens.EDIT:
              return (
                <EditScreen
                  id={currentScreen.member}
                  setCurrentScreen={setCurrentScreen}
                />
              );
          }
        })()}
      </AppLayout>
    </Provider>
  );
};

export default App;
