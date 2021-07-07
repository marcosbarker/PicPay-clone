import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import HomePages from './pages/Home';
import FinancePages from './pages/Finance';
import PayPages from './pages/Pay';
import PayButton from './components/PayButton';

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
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Store: {
    lib: SimpleLineIcons ,
    name: 'bag',
  }
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {

          if (route.name === 'Pay') {
            return(
              <PayButton 
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }

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
          title: '',
         }} 
      />
      <Tab.Screen name="Notifications" component={PayPages}
        options={{
          title: 'Notificações',
         }} 
      />
      <Tab.Screen name="Store" component={PayPages}
        options={{
          title: 'Store',
         }} 
      />
    </Tab.Navigator>
  );
}