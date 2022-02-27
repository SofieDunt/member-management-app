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

const AppLayout = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  background: ${BACKGROUND_GREY};
`;

export interface ScreenProps {
  readonly members: AppMembers;
  readonly setCurrentScreen: (currentScreen: CurrentScreenProps) => void;
}

export enum Screens {
  LIST,
  ADD,
  EDIT,
}

export interface CurrentScreenProps {
  readonly screen: Screens;
  readonly member?: number;
}

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
