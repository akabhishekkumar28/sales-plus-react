import React from 'react';
import * as s from './MainView.styles';
import Routes from '../../Routes'

const MainView = () => {
  return (
    <s.MainViewContainer className="p-2">
      <Routes />
    </s.MainViewContainer>
  )
}

export default MainView