import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePages from './pages/Home';
import FinancePages from './pages/Finance';
import PayPages from './pages/Pay';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" componet={HomePages} />
      <Tab.Screen name="Finance" componet={FinancePages} />
      <Tab.Screen name="Pay" componet={PayPages} />
    </Tab.Navigator>
  );
}