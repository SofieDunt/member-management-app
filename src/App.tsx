import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListScreen from './screens/listScreen';
import AddScreen from './screens/addScreen';
import EditScreen from './screens/editScreen';
import styled from 'styled-components';
import { BACKGROUND_GREY } from './theme';

const AppLayout = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  background: ${BACKGROUND_GREY};
`;

export enum Routes {
  LIST = '/',
  ADD = '/add',
  EDIT = '/edit/:userId',
}

const App: React.FC = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Switch>
          <Route path={Routes.LIST} exact>
            <ListScreen />
          </Route>
          <Route path={Routes.ADD} exact>
            <AddScreen />
          </Route>
          <Route path={Routes.EDIT} exact>
            <EditScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppLayout>
  );
};

export default App;
