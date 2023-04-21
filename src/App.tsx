import React from 'react';
import classNames from 'classnames';
import InfoList from './components/InfoList';
import SquaresList from './components/SquaresList';
import { SelectedSquareProvider } from './shared/context';
import './App.scss';

function App() {
  return (
    <div className={classNames('App')}>
      <SelectedSquareProvider>
        <SquaresList />
        <InfoList />
      </SelectedSquareProvider>
    </div>
  );
}

export default App;
