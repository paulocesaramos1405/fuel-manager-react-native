import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Calculadora from './Calculadora';
import Gastos from './Gastos'


const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'gastos', title: 'Gastos', focusedIcon: 'heart', unfocusedIcon: 'gas-station'},
    { key: 'calculadora', title: 'Calculadora', focusedIcon: 'heart', unfocusedIcon: 'calculator'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    gastos: Gastos,
    calculadora: Calculadora,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;