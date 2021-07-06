import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons} from '@expo/vector-icons';

import HomePages from './pages/Home';
import FinancePages from './pages/Finance';
import PayPages from './pages/Pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Finance: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Pay: {
    lib: AntDesign,
    name: 'home',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  }
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        }, 
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
      >
      <Tab.Screen name="Home" component={HomePages}
        options={{
          title: 'Início',
        }} 
      />
      <Tab.Screen name="Finance" component={FinancePages}
        options={{
          title: 'Carteira',
        }} 
      />
      <Tab.Screen name="Pay" component={PayPages}
        options={{
          title: 'Pagar',
         }} 
      />
      <Tab.Screen name="Notifications" component={PayPages}
        options={{
          title: 'Notificações',
         }} 
      />
      <Tab.Screen name="Settings" component={PayPages}
        options={{
          title: 'Ajustes',
         }} 
      />
    </Tab.Navigator>
  );
}